import NavMenu from '../components/NavMenu';
import PetsContainer from '../components/PetsContainer';
import HistoryContainer from '../components/HistoryContainer';
import CreatePetForm from '../components/CreatePetForm';
import useCookies from 'react-cookie/cjs/useCookies';
import { useEffect } from 'react';

export default function Dashboard() {
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {}, []);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <NavMenu />

      <div className='flex items-start justify-start mt-16'>
        <div className='w-1/4 flex items-start justify-center'>
          <HistoryContainer />
        </div>
        {/* <div className='divider divider-horizontal'></div> */}
        <div className='w-3/4 flex items-center justify-between pr-4'>
          <PetsContainer />
        </div>
      </div>

      <div>
        <input type='checkbox' id='add-pet' className='modal-toggle' />
        <label htmlFor='add-pet' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <CreatePetForm />
          </label>
        </label>
      </div>
    </div>
  );
}
