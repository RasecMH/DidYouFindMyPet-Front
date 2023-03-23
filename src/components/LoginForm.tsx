import axios from 'axios';
import { FormEvent, useState } from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import { useNavigate } from 'react-router';
import ReactLoading from 'react-loading';
import { useSessionStorage } from 'usehooks-ts';
import UnderConstructionModal from './UnderConstructionModal';

export default function LoginForm() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [sessionValue, setSessionValue] = useSessionStorage('token', '');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [rememberCheck, setRememberCheck] = useState(false);
  const [submitErrorValue, setSubmitErrorValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitErrorValue('');

    const payload = {
      email: emailValue,
      password: passwordValue,
    };
    try {
      const res = await axios.post(
        'https://did-you-find-my-pet.vercel.app/user/login',
        payload
      );
      console.log(res);
      if (rememberCheck) {
        setCookie('token', res.data.token);
      } else {
        setSessionValue(res.data.token);
      }
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error: any) {
      setIsLoading(false);
      setSubmitErrorValue(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='lg:w-1/2'>
        <h1 className='text-4xl'>Welcome Back</h1>
        <span>
          Don't have a account,{' '}
          <a className='link' onClick={() => navigate('/register')}>
            Sign Up
          </a>
        </span>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            required
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
            required
            placeholder='*********'
            className='input input-bordered w-full max-w-xs'
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-3 items-start justify-between mt-3'>
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
          <label
            className='text-xs self-center'
            htmlFor='under-construction-modal'>
            Forget password?
          </label>
        </div>
        <button className='btn w-full my-3' type='submit'>
          {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Sign In'}
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

      <UnderConstructionModal />
    </>
  );
}
