import NavMenu from '../components/NavMenu';
import PetsContainer from '../components/PetsContainer';
import HistoryContainer from '../components/HistoryContainer';

export default function Dashboard() {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <NavMenu />

      <div className='flex items-start justify-center'>
        <div className='w-1/4 flex items-center justify-center'>
          <HistoryContainer />
        </div>
        {/* <div className='divider divider-horizontal'></div> */}
        <div className='w-3/4'>
          <PetsContainer />
        </div>
      </div>

      <div>
        <input type='checkbox' id='add-pet' className='modal-toggle' />
        <label htmlFor='add-pet' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-lg font-bold'>Add Pet</h3>
            <p className='py-4'>
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </label>
        </label>
      </div>
    </div>
  );
}
