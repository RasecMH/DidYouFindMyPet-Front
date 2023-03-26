import { ILocation } from '../interfaces/LocationInterface';

export default function HistoryCard({ id, pet, city, createdDate }: ILocation) {
  const myDate = new Date(createdDate);
  return (
    <li>
      <label
        htmlFor={`${pet.name}-${id}-${createdDate}`}
        className='flex justify-between'>
        {pet.name}{' '}
        <span>
          {city.name} -{' '}
          {`${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`}
        </span>
      </label>
    </li>
  );
}
