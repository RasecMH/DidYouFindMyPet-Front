import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import ReactLoading from 'react-loading';
import { ICity } from '../interfaces/CityInterface';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [cityValue, setCityValue] = useState<string>('');
  const [citiesAutoCompleteValue, setCitiesAutoCompleteValue] = useState<
    ICity[]
  >([]);
  const [patternValue, setPatternValue] = useState<string>('');
  const [addressValue, setAddressValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [countryCodeValue, setCountryCodeValue] = useState<string>('');
  const [submitErrorValue, setSubmitErrorValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      address: addressValue,
      cityId: getCityId?.id,
      phone: phoneValue,
      code: `+${countryCodeValue}`,
    };
    try {
      const res = await axios.post(
        'https://did-you-find-my-pet.vercel.app/user/register',
        payload
      );
      console.log(res);
      setCookie('token', res.data.token);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error: any) {
      setIsLoading(false);
      setSubmitErrorValue(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const fetchCities = async (query: string): Promise<ICity[]> => {
    const citiesData = await axios.get(
      `https://did-you-find-my-pet.vercel.app/cities/search?q=${query}`
    );
    return citiesData.data;
  };

  function formatPhoneToState(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/3'>
        <h1 className='text-4xl'>Create account</h1>
        <span>
          Already have a account,{' '}
          <a className='link' onClick={() => navigate('/')}>
            Sign In
          </a>
        </span>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            required
            minLength={6}
            placeholder='John Doe'
            className='input input-bordered w-full'
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            required
            placeholder='John@doe.com'
            className='input input-bordered w-full'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            required
            minLength={6}
            placeholder='*********'
            className='input input-bordered w-full'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className='flex gap-2'>
          <div className='form-control w-20'>
            <label className='label'>
              <span className='label-text'>Code</span>
            </label>
            <input
              type='tel'
              required
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
              required
              placeholder='(**) ****-****'
              className='input input-bordered w-full'
              value={formatPhoneToState(phoneValue)}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          </div>
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
            required
            minLength={6}
            placeholder='Street 123'
            className='input input-bordered w-full'
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
        </div>

        <button className='btn w-full my-3' type='submit'>
          {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Sign Up'}
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
      </form>
    </>
  );
}
