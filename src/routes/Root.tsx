import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import loginImage from '../assets/login-image.svg';
import bgImage from '../assets/background.svg';
import NavMenu from '../components/NavMenu';

export default function Root() {
  return (
    <div className='w-screen h-screen'>
      <NavMenu />
      <div className='flex items-center justify-center w-full h-full'>
        <div
          className='
        flex
        justify-center
        items-center
        w-1/3 
        h-full'>
          <LoginForm />
        </div>
        <div
          className='w-2/3 
        bg-cover
        bg-center 
        h-full 
        flex 
        items-center 
        justify-center
        bg-[url("https://source.unsplash.com/random/?pet/")]'>
          {/* <img className='w-2/3' src={loginImage} /> */}
        </div>
      </div>
    </div>
  );
}
