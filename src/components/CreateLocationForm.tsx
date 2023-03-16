import { FormEvent, useEffect, useState } from 'react';
import formatPhone from '../utils/formatPhone';
import petInfo from '../utils/petInfo.json';
import Map from './Map';
import CitiesFile from '../utils/Cities.json';

interface citiesInt {
  id: number;
  city: string;
  state: string;
}

export default function CreateLocationForm() {
  const [locationValue, setLocationValue] = useState({
    lat: 0,
    lng: 0,
  });
  const [cityValue, setCityValue] = useState('');
  const [citiesAutoCompleteValue, setCitiesAutoCompleteValue] = useState<
    citiesInt[]
  >([]);
  const [stateValue, setStateValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [countryCodeValue, setCountryCodeValue] = useState('');

  const fetchCities = (query: string) => {
    return CitiesFile.filter((city) => city.city.includes(query));
  };

  const handleCityChange = async (e: any) => {
    const value = e.target.value.split(', ');
    setCityValue(value[0]);
    setStateValue(value[1]);
    if (!cityValue) return;
    const res = fetchCities(e.target.value);
    if (!citiesAutoCompleteValue.includes(value[0])) {
      setCitiesAutoCompleteValue(res);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
        <h1 className='text-3xl font-bold mb-5'>{petInfo.name}</h1>
        <h1 className='text-lg font-bold'>Description:</h1>
        <p className='py-2'>{petInfo.description}</p>
        <h1 className='text-lg font-bold'>Health:</h1>
        <p className='py-2'>{petInfo.health}</p>
        <h1 className='text-lg font-bold'>Address:</h1>
        <p className='py-2'>
          {petInfo.user.address} - {petInfo.user.city}, {petInfo.user.state}
        </p>
        <h1 className='text-lg font-bold'>Contact:</h1>
        <a href={`tel:${petInfo.user.phone}`} className='py-2'>
          {formatPhone(petInfo.user.phone)}
        </a>
        <div className='flex flex-col justify-center items-center'>
          <Map center={center} petName={petInfo.name} />
          <button
            onClick={getLocation}
            type='button'
            className='btn w-1/3 mt-3'>
            Send Location
          </button>
        </div>

        <div className='flex gap-2'>
          <div className='form-control w-2/3'>
            <label className='label'>
              <span className='label-text'>City</span>
            </label>
            <input
              type='text'
              list='places'
              placeholder='New York'
              className='input input-bordered w-full'
              value={cityValue}
              pattern={
                citiesAutoCompleteValue.map((city) => city.city).join('|') ||
                cityValue
              }
              autoComplete='off'
              onChange={handleCityChange}
            />
            <datalist id='places'>
              {citiesAutoCompleteValue.map((city, i) => (
                <option key={i}>{`${city.city}, ${city.state}`}</option>
              ))}
            </datalist>
          </div>

          <div className='form-control w-1/3'>
            <label className='label'>
              <span className='label-text'>State</span>
            </label>
            <input
              type='text'
              placeholder='NY'
              className='input input-bordered w-full'
              defaultValue={stateValue}
              disabled
            />
          </div>
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

        <button className='btn w-full mt-3' type='submit'>
          Send
        </button>
      </form>
    </>
  );
}
