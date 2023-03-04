import LoginForm from '../components/LoginForm';
import loginImage from '../assets/login-image.jpg';
import NavMenu from '../components/NavMenu';

export default function Root() {
  return (
    <div>
      <NavMenu />
      <div className='flex items-center justify-end w-full'>
        <div className='flex justify-center w-1/3 ml-14'>
          <LoginForm />
        </div>
        <div className='w-2/3 h-fit flex justify-center'>
          <img className='w-2/3' src={loginImage} />
        </div>
      </div>
    </div>
  );
}
