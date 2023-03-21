import { FormEvent, useEffect, useState } from 'react';
import formatPhone from '../utils/formatPhone';
import Map from './Map';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useCookies } from 'react-cookie';
import { useSessionStorage } from 'usehooks-ts';
import ReactLoading from 'react-loading';

interface ICity {
  id: number;
  name: string;
  stateId: number;
  state: IState;
}

interface IState {
  id: number;
  name: string;
  countryId: number;
  country: ICountry;
}

interface ICountry {
  id: number;
  name: string;
  phone: number;
  code: string;
}

export default function CreateLocationForm() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [sessionValue, setSessionValue] = useSessionStorage('token', '');
  const [locationValue, setLocationValue] = useState({
    lat: 0,
    lng: 0,
  });
  const [cityValue, setCityValue] = useState('');
  const [citiesAutoCompleteValue, setCitiesAutoCompleteValue] = useState<
    ICity[]
  >([]);
  const [patternValue, setPatternValue] = useState<string>('');
  const [addressValue, setAddressValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [countryCodeValue, setCountryCodeValue] = useState('');
  const [submitErrorValue, setSubmitErrorValue] = useState('');
  const [submitSuccessValue, setSubmitSuccessValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [petDataValue, setPetDataValue] = useState<any>({
    description: '',
    health: '',
    id: 0,
    image: '',
    name: '',
    user: {
      address: '',
      cityId: 0,
      code: '',
      email: '',
      id: 0,
      name: '',
      phone: '',
    },
  });
  const { id } = useParams();

  const fetchCities = async (query: string): Promise<ICity[]> => {
    const citiesData = await axios.get(
      `https://did-you-find-my-pet.vercel.app/cities/search?q=${query}`
    );
    return citiesData.data;
  };

  const handleCityChange = async (e: any) => {
    const value = e.target.value.split(', ');
    setCityValue(e.target.value);
    if (!cityValue) return;
    const res = await fetchCities(e.target.value);
    const pattern = res
      .map(
        (city) => `${city.name}, ${city.state.name}, ${city.state.country.name}`
      )
      .join('|');
    if (!patternValue.includes(value[0])) {
      setCitiesAutoCompleteValue(res);
      setPatternValue(pattern);
    }
  };

  useEffect(() => {
    fetchPet();
  }, []);

  const fetchPet = async () => {
    try {
      const res = await axios.get(
        `https://did-you-find-my-pet.vercel.app/pet/${id}`
      );
      console.log(res.data);

      setPetDataValue(res.data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitErrorValue('');
    const cityValues = cityValue.split(', ');
    const getCityId = citiesAutoCompleteValue.find(
      (city) =>
        city.name === cityValues[0] &&
        city.state.name === cityValues[1] &&
        city.state.country.name === cityValues[2]
    );

    const payload = {
      location: `${locationValue.lat}/${locationValue.lng}`,
      address: addressValue,
      cityId: getCityId?.id,
      message: messageValue,
      phone: phoneValue,
      code: `+${countryCodeValue}`,
      petId: id,
    };
    try {
      const res = await axios.post(
        'https://did-you-find-my-pet.vercel.app/location/create',
        payload
      );
      console.log(res);
      // setCookie('token', res.data.token);
      setIsLoading(false);
      setSubmitSuccessValue('Success');
      // navigate('/dashboard');
    } catch (error: any) {
      setIsLoading(false);
      setSubmitErrorValue(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      setLocationValue({ lat, lng });
    });
  };

  function formatPhoneToState(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }

  useEffect(() => {
    getLocation();
  }, []);

  const center = { lat: locationValue.lat, lng: locationValue.lng };
  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/3'>
        <h1 className='text-3xl font-bold mb-5'>{petDataValue.name}</h1>
        <h1 className='text-lg font-bold'>Description:</h1>
        <p className='py-2'>{petDataValue.description}</p>
        <h1 className='text-lg font-bold'>Health:</h1>
        <p className='py-2'>{petDataValue.health}</p>
        <h1 className='text-lg font-bold'>Address:</h1>
        <p className='py-2'>
          {petDataValue.user.address} - {petDataValue.user.city},{' '}
          {petDataValue.user.state}
        </p>
        <h1 className='text-lg font-bold'>Contact:</h1>
        <a href={`tel:${petDataValue.user.phone}`} className='py-2'>
          {formatPhone(petDataValue.user.phone)}
        </a>
        <div className='flex flex-col justify-center items-center'>
          <Map center={center} petName={petDataValue.name} />
          <button
            onClick={getLocation}
            type='button'
            className='btn w-1/3 mt-3'>
            Send Location
          </button>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>City</span>
          </label>
          <input
            type='text'
            list='places'
            required
            placeholder='New York'
            className='input input-bordered w-full'
            value={cityValue}
            pattern={patternValue}
            autoComplete='off'
            onChange={handleCityChange}
          />
          <datalist id='places'>
            {citiesAutoCompleteValue.map((city, i) => (
              <option
                key={
                  i
                }>{`${city.name}, ${city.state.name}, ${city.state.country.name}`}</option>
            ))}
          </datalist>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Address</span>
          </label>
          <input
            type='text'
            placeholder='Street 123'
            className='input input-bordered w-full'
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
        </div>

        <div className='flex gap-2'>
          <div className='form-control w-20'>
            <label className='label'>
              <span className='label-text'>Code</span>
            </label>
            <input
              type='tel'
              maxLength={3}
              placeholder='+***'
              className='input input-bordered w-full'
              value={countryCodeValue}
              onChange={(e) => setCountryCodeValue(e.target.value)}
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Phone</span>
            </label>
            <input
              type='tel'
              placeholder='(**) ****-****'
              className='input input-bordered w-full'
              value={phoneValue}
              onChange={(e) =>
                setPhoneValue(formatPhoneToState(e.target.value))
              }
            />
          </div>
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Message</span>
          </label>
          <textarea
            rows={50}
            className='input input-bordered w-full h-32'
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </div>

        <button className='btn w-full my-3' type='submit'>
          {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Send'}
        </button>
        {submitErrorValue.length > 0 && (
          <div className='alert alert-error shadow-lg'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current flex-shrink-0 h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>{submitErrorValue}</span>
            </div>
          </div>
        )}
        {submitSuccessValue.length > 0 && (
          <div className='alert alert-sucess shadow-lg'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current flex-shrink-0 h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>{submitSuccessValue}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
