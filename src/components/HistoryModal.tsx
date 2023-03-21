import Map from './Map';
import formatPhone from '../utils/formatPhone';

interface HistoryInfo {
  id: number;
  petName: string;
  city: string;
  createdDate: string;
  location: string;
  address: string;
  contact: {
    id: number;
    message: string;
    phone: string;
  };
}

export default function HistoryModal({
  id,
  petName,
  city,
  createdDate,
  address,
  contact,
  location,
}: HistoryInfo) {
  const locationArr = location.split('/');
  const myDate = new Date(createdDate);
  return (
    <div>
      <input
        type='checkbox'
        id={`${petName}-${id}-${createdDate}`}
        className='modal-toggle'
      />
      <label
        htmlFor={`${petName}-${id}-${createdDate}`}
        className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <h3 className='text-3xl font-bold mb-6'>
            {petName} -{' '}
            {`${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`}
          </h3>
          <a
            target='_blank'
            href={`https://www.google.com.br/maps/search/${locationArr[0]}, ${locationArr[1]}`}
            className='pt-6 link'>
            {`${city} - ${address}`}
          </a>
          <Map
            center={{
              lat: Number(locationArr[0]),
              lng: Number(locationArr[1]),
            }}
            petName={petName}
          />
          <h3 className='text-lg font-bold pt-4'>Message:</h3>
          <p className='py-2'>{contact.message}</p>
          <h3 className='text-lg font-bold'>Contact:</h3>
          <p className='py-2'>{formatPhone(contact.phone)}</p>
        </label>
      </label>
    </div>
  );
}
