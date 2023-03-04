import NavMenu from '../components/NavMenu';
import PetCard from '../components/PetCard';

export default function Dashboard() {
  return (
    <div className='w-screen flex items-center justify-center'>
      <NavMenu />

      <div className='flex gap-10'>
        <PetCard />
        <div className='card w-96 h-96 bg-base-100 shadow-2xl'>
          <div className='card-body items-center justify-center text-center'>
            <h2 className='card-title'>Add Pet</h2>
            <div className='card-actions'>
              <label htmlFor='add-pet' className='btn btn-primary btn-circle'>
                +
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <input type='checkbox' id='add-pet' className='modal-toggle' />
        <label htmlFor='add-pet' className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-lg font-bold'>Help Modal</h3>
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
