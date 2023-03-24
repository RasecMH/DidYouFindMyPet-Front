import NavMenu from '../components/NavMenu';
import PetsContainer from '../components/PetsContainer';
import HistoryContainer from '../components/HistoryContainer';
import CreatePetForm from '../components/CreatePetForm';
import useCookies from 'react-cookie/cjs/useCookies';
import { useEffect, useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import axios from 'axios';

export default function Dashboard() {
  const [sessionValue, setSessionValue] = useSessionStorage('token', '');
  const [userDataValue, setUserDataValue] = useState<any>({
    user: {},
    pets: [],
    locationHistory: [],
  });
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const auth = cookies.token || sessionValue;

      const res = await axios.get(
        'https://did-you-find-my-pet.vercel.app/user/',
        {
          headers: {
            Authorization: auth,
          },
        }
      );
      console.log(res.data);

      setUserDataValue(res.data);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className='w-screen h-screen'>
      <NavMenu />

      <div
        className='
      flex 
      max-lg:flex-col 
      items-center
      lg:items-start
      justify-start
      mt-16
      w-full
      h-full
      gap-6
      '>
        <div className='w-full lg:w-1/3 px-6 flex items-center justify-between'>
          <HistoryContainer historyData={userDataValue.locationHistory} />
        </div>
        <div className='w-full px-6 flex items-center justify-between lg:mr-4'>
          <PetsContainer petsData={userDataValue.pets} />
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
