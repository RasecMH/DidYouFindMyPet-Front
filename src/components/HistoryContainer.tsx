import HistoryMock from '../utils/HistoryMock.json';
import HistoryCard from './HistoryCard';
import HistoryModal from './HistoryModal';

export default function HistoryContainer() {
  return (
    <div className='w-2/3'>
      <h1 className='text-4xl'>History</h1>
      <div className='divider'></div>
      <ul className='menu bg-base-100 w-full rounded-box shadow-2xl mt-4'>
        {HistoryMock.map((history) => (
          <HistoryCard
            id={history.id}
            city={history.city}
            address={history.address}
            petName={history.petName}
            createdDate={history.createdDate}
            locationLink={history.locationLink}
            contact={history.contact}
            key={history.id}
          />
        ))}
      </ul>

      {HistoryMock.map((history) => (
        <HistoryModal
          id={history.id}
          city={history.city}
          address={history.address}
          petName={history.petName}
          createdDate={history.createdDate}
          locationLink={history.locationLink}
          contact={history.contact}
          key={history.id}
        />
      ))}
    </div>
  );
}
