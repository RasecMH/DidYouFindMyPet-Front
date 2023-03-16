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
    <div className='w-full h-full flex flex-col items-center gap-32'>
      <div className='h-1/3 w-full'>
        <NavMenu />
      </div>
      <div className='w-2/3 flex justify-center pb-32'>
        <CreateLocationForm />
      </div>
    </div>
  );
}
