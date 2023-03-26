import PetCard from '../components/PetCard';
import { IPet } from '../interfaces/PetInterface';

interface Props {
  petsData: IPet[] | [];
}

export default function PetsContainer({ petsData }: Props) {
  return (
    <div className='w-full mb-6'>
      <div className='flex gap-4'>
        <h1 className='text-4xl'>Pets</h1>
        <label
          htmlFor='add-pet'
          className='btn btn-primary btn-circle btn-sm self-end font-extrabold lg:hidden'>
          +
        </label>
      </div>
      <div className='divider w-full'></div>
      <div className='flex gap-6 flex-wrap items-start justify-start mt-4'>
        {petsData.map((pet) => (
          <PetCard
            key={pet.id}
            userId={pet.userId}
            id={pet.id}
            name={pet.name}
            description={pet.description}
            health={pet.health}
            image={pet.image}
          />
        ))}
        <div className='max-lg:hidden card w-72 h-72 bg-base-100 shadow-2xl '>
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
