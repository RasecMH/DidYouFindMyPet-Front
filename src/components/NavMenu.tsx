import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router';
import { useSessionStorage } from 'usehooks-ts';
import SingButton from './SingButton';

export default function NavMenu() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [sessionValue, setSessionValue] = useSessionStorage<string | boolean>(
    'token',
    ''
  );
  const [swapClose, setSwapClose] = useState<boolean>(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    removeCookie('token');
    sessionStorage.removeItem('token');
    navigate('/');
  };
  const contentVisibility = swapClose ? 'hidden' : 'visible';
  const auth = cookies.token || sessionValue;
  const signContent = pathname === '/register' ? 'Sing In' : 'Sign Up';
  const signPath = pathname === '/register' ? '/' : '/register';
  return (
    <div
      className='
    navbar
    w-full 
    bg-base-100 
    shadow-md 
    z-10'>
      <div className='flex-1'>
        <a
          onClick={() => navigate('/')}
          className='btn btn-ghost hover:bg-transparent normal-case text-xl lg:ml-14'>
          DidYouFindMyPet
        </a>
      </div>
      <div className='flex-none dropdown'>
        <label
          tabIndex={0}
          className='btn btn-ghost hover:bg-transparent swap swap-rotate lg:hidden'>
          <input
            onChange={() => setSwapClose(!swapClose)}
            type='checkbox'
            checked={swapClose}
          />
          <svg
            className='swap-on fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'>
            <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
          </svg>
          <svg
            className='swap-off fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'>
            <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
          </svg>
        </label>
        <ul
          onBlur={() => setSwapClose(!swapClose)}
          tabIndex={0}
          className={`
          menu
          flex
          items-center
          justify-center
          lg:mr-6
          lg:menu-horizontal
          max-lg:bg-base-300
          max-lg:dropdown-content
          max-lg:text-3xl
          max-lg:-right-2
          max-lg:w-screen
          max-lg:h-screen
          z-50
          ${contentVisibility}`}>
          <li>
            <label htmlFor='help-modal'>About</label>
          </li>
          <li>
            <label htmlFor='contact-modal'>Contact</label>
          </li>
          <li>
            {auth ? (
              <a onClick={handleLogout}>Logout</a>
            ) : (
              <SingButton content={signContent} path={signPath} />
            )}
          </li>
        </ul>
      </div>

      <div>
        <input type='checkbox' id='contact-modal' className='modal-toggle' />
        <label htmlFor='contact-modal' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-lg font-bold'>Find me</h3>
            <ul className='flex flex-col gap-4 mt-6'>
              <li>
                <a
                  href='https://www.linkedin.com/in/cesarholanda/'
                  target='_blank'
                  className='py-4'>
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/RasecMH'
                  target='_blank'
                  className='py-4'>
                  Github
                </a>
              </li>
              <li>
                <a
                  href='https://portfolio-rasecmh.vercel.app/'
                  target='_blank'
                  className='py-4'>
                  Portfolio
                </a>
              </li>
            </ul>
          </label>
        </label>
      </div>

      <div>
        <input type='checkbox' id='help-modal' className='modal-toggle' />
        <label htmlFor='help-modal' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-3xl font-bold'>About</h3>
            <p className='py-4'>
              The purpose of the project is to allow users to register
              information about an animal, and generate a QR code that can be
              scanned to generate a history of the animal's location.
            </p>
            <p className='py-4'>
              The application has a simple and intuitive user interface built
              using React, which allows users to easily register and manage
              animal information. The backend of the application is built using
              Node.js and TypeScript, and stores the animal data in a database.
            </p>
            <p className='py-4'>
              Once an animal has been registered, the application generates a
              unique QR code for that animal. This QR code can be printed and
              contains a link to a web page that displays the animal's
              information and share the location with user, the person who
              scanned the QR code also can send a message and contact info.
            </p>
            <p className='py-4'>
              Overall, my this project provides a useful tool for animal owners,
              caretakers, and researchers who need to keep track of an animal's
              location history. The use of TypeScript, React, and Node.js
              ensures that the application is reliable, efficient, and easy to
              maintain.
            </p>
          </label>
        </label>
      </div>
    </div>
  );
}
