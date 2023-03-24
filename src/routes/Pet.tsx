import NavMenu from '../components/NavMenu';
import useCookies from 'react-cookie/cjs/useCookies';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import CreateLocationForm from '../components/CreateLocationForm';

export default function Pet() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { id } = useParams();

  useEffect(() => {}, []);

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='w-full'>
        <NavMenu />
      </div>
      <div className='lg:w-2/3 flex justify-center mt-16 pb-32'>
        <CreateLocationForm />
      </div>
    </div>
  );
}
