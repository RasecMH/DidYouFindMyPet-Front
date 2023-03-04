import PetCard from '../components/PetCard';
import PetsMock from '../utils/PetsMock.json';

export default function PetsContainer() {
  return (
    <div>
      <h1 className='text-4xl'>Pets</h1>
      <div className='divider'></div>
      <div className='flex gap-10 flex-wrap items-start justify-start mt-4'>
        {PetsMock.map((pet) => (
          <PetCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            description={pet.description}
            health={pet.health}
            qrCode={pet.qrCode}
            image={pet.image}
          />
        ))}
        <div className='card w-80 h-80 bg-base-100 shadow-2xl '>
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
    </div>
  );
}
