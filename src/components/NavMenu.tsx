import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

export default function NavMenu() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('token');
    navigate('/');
  };

  return (
    <div className='navbar bg-base-100 shadow-md z-10'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl ml-14'>
          DidYouFindMyPet
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <label htmlFor='help-modal'>About</label>
          </li>
          <li>
            <label htmlFor='contact-modal'>Contact</label>
          </li>
          <li>
            {cookies.token ? (
              <a onClick={handleLogout}>Logout</a>
            ) : (
              <a>Sign Up</a>
            )}
          </li>
        </ul>
      </div>

      <div>
        <input type='checkbox' id='contact-modal' className='modal-toggle' />
        <label htmlFor='contact-modal' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-lg font-bold'>Contact Modal</h3>
            <p className='py-4'>
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
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
