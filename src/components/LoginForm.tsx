import { useEffect, useState } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import { useNavigate } from 'react-router';

export default function LoginForm() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rememberCheck, setRememberCheck] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setCookie('token', '123456');
    navigate('/dashboard');
  };

  return (
    <>
      <div className='w-1/2'>
        <h1 className='text-4xl'>Welcome Back</h1>
        <span>
          Don't have a account,{' '}
          <a className='link' href=''>
            Sign Up
          </a>
        </span>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='john@doe.com'
            className='input input-bordered w-full max-w-xs'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='*********'
            className='input input-bordered w-full max-w-xs'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className='flex items-center justify-between mt-3'>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <input
                checked={rememberCheck}
                onChange={(e) => setRememberCheck(!rememberCheck)}
                type='checkbox'
                className='checkbox mr-2'
              />
              <span className='label-text'>Remember me</span>
            </label>
          </div>
          <a href=''>Forget password?</a>
        </div>
        <button onClick={handleLogin} className='btn w-full mt-3'>
          Sign In
        </button>
      </div>
    </>
  );
}
