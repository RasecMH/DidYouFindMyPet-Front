import Map from './Map';
import formatPhone from '../utils/formatPhone';

interface HistoryInfo {
  id: number;
  petName: string;
  city: string;
  createdDate: string;
  locationLink: string;
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
  return (
    <div>
      <input type='checkbox' id={`${petName}-${id}`} className='modal-toggle' />
      <label htmlFor={`${petName}-${id}`} className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <h3 className='text-3xl font-bold'>
            {petName} - {createdDate}
          </h3>
          <a
            target='_blank'
            href={`https://www.google.com.br/maps/search/${location.lat}, ${location.lng}`}
            className='pt-6'>
            {`${city} - ${address}`}
          </a>
          <Map center={location} petName={petName} />
          <h3 className='text-lg font-bold pt-4'>Message:</h3>
          <p className='py-2'>{contact.message}</p>
          <h3 className='text-lg font-bold'>Contact:</h3>
          <p className='py-2'>{formatPhone(contact.phone)}</p>
        </label>
      </label>
    </div>
  );
}
