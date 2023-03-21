import PetCard from '../components/PetCard';
import PetsMock from '../utils/PetsMock.json';

interface petsInfo {
  id: number;
  name: string;
  city: string;
  description: string;
  health: string;
  image: string;
}

interface Props {
  petsData: petsInfo[] | [];
}

export default function PetsContainer({ petsData }: Props) {
  return (
    <div className='w-full'>
      <h1 className='text-4xl'>Pets</h1>
      <div className='divider w-full'></div>
      <div className='flex gap-8 flex-wrap items-start justify-start mt-4'>
        {petsData.map((pet) => (
          <PetCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            description={pet.description}
            health={pet.health}
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
