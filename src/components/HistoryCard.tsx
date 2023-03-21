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

export default function HistoryCard({
  id,
  petName,
  city,
  createdDate,
  location,
  address,
  contact,
}: HistoryInfo) {
  const myDate = new Date(createdDate);
  return (
    <li>
      <label
        htmlFor={`${petName}-${id}-${createdDate}`}
        className='flex justify-between'>
        {petName}{' '}
        <span>
          {city} -{' '}
          {`${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`}
        </span>
      </label>
    </li>
  );
}
