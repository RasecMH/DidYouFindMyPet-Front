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

export default function HistoryCard({
  id,
  petName,
  city,
  createdDate,
  locationLink,
  address,
  contact,
}: HistoryInfo) {
  return (
    <li>
      <label htmlFor={`${petName}-${id}`} className='flex justify-between'>
        {petName}{' '}
        <span>
          {city} - {createdDate}
        </span>
      </label>
    </li>
  );
}
