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
  locationLink,
  address,
  contact,
}: HistoryInfo) {
  return (
    <div>
      <input type='checkbox' id={`${petName}-${id}`} className='modal-toggle' />
      <label htmlFor={`${petName}-${id}`} className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <h3 className='text-lg font-bold'>{petName}</h3>
          <p className='py-4'>{locationLink}</p>
          <p className='py-4'>{address}</p>
          <p className='py-4'>{contact.message}</p>
          <p className='py-4'>{contact.phone}</p>
        </label>
      </label>
    </div>
  );
}
