<<<<<<< HEAD
=======
import Map from './Map';
import formatPhone from '../utils/formatPhone';

>>>>>>> 1a2c434 (change: google-maps to leaflet)
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
          <h3 className='text-lg font-bold'>
            {petName} - {createdDate}
          </h3>
          <a
            target='_blank'
            href={`https://www.google.com.br/maps/search/${location.lat}, ${location.lng}`}
            className='py-4'>
            {`${city} - ${address}`}
          </a>
          <Map center={location} petName={petName} />
          <h3 className='text-lg font-bold'>Message:</h3>
          <p className='py-2'>{contact.message}</p>
          <h3 className='text-lg font-bold'>Contact:</h3>
          <p className='py-2'>{formatPhone(contact.phone)}</p>
        </label>
      </label>
    </div>
  );
}
