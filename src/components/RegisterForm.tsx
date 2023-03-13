import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [citiesAutoCompleteValue, setCitiesAutoCompleteValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  return (
    <>
      <div className='w-2/3'>
        <h1 className='text-4xl'>Create account</h1>
        <span>
          Alreary have a account,{' '}
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
            placeholder='*********'
            className='input input-bordered w-full'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className='flex gap-2'>
          <div className='form-control w-2/3'>
            <label className='label'>
              <span className='label-text'>City</span>
            </label>
            <input
              type='text'
              placeholder='New York'
              className='input input-bordered w-full'
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
          </div>

          <div className='form-control w-1/3'>
            <label className='label'>
              <span className='label-text'>State</span>
            </label>
            <input
              type='text'
              placeholder='NY'
              className='input input-bordered w-full'
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
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

        <button className='btn w-full mt-3'>Sign Up</button>
      </div>
    </>
  );
}
