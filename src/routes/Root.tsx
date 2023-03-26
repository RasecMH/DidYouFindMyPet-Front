import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import loginImage from '../assets/login-image.svg';
import bgImage from '../assets/background.svg';
import NavMenu from '../components/NavMenu';
import { useSessionStorage } from 'usehooks-ts';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

interface Props {
  register?: boolean;
}

export default function Root({ register }: Props) {
  const [sessionValue, setSessionValue] = useSessionStorage('token', '');
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = cookies.token || sessionValue;
    if (auth) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className='w-screen h-screen  flex flex-col items-center justify-center'>
      <NavMenu />
      <div className='lg:flex items-center justify-center w-full h-full'>
        <div
          className='
        flex
        justify-center
        items-center
        lg:w-1/3
        w-screen
        h-full'>
          {register ? <RegisterForm /> : <LoginForm />}
        </div>
        <div
          className='
        hidden
        w-0
        lg:visible
        lg:w-2/3 
        lg:bg-cover
        lg:bg-center 
        lg:h-full 
        lg:flex 
        lg:items-center 
        lg:justify-center
        lg:bg-[url("https://source.unsplash.com/random/?pet/")]'></div>
      </div>
    </div>
  );
}
