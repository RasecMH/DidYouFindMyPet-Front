import HistoryCard from './HistoryCard';
import HistoryModal from './HistoryModal';
import { ILocation } from '../interfaces/LocationInterface';

interface Props {
  historyData: ILocation[] | [];
}

export default function HistoryContainer({ historyData }: Props) {
  return (
    <div className='w-full'>
      <h1 className='text-4xl'>History</h1>
      <div className='divider w-full'></div>
      {historyData.length ? (
        <ul className='menu bg-base-100 w-full rounded-box shadow-2xl mt-4'>
          {historyData.length &&
            historyData.map((history) => (
              <HistoryCard
                id={history.id}
                city={history.city}
                address={history.address}
                pet={history.pet}
                cityId={history.cityId}
                contactId={history.contactId}
                petId={history.petId}
                createdDate={history.createdDate}
                location={history.location}
                contact={history.contact}
                key={history.id}
              />
            ))}
        </ul>
      ) : (
        <p>No history found</p>
      )}

      {historyData.map((history) => (
        <HistoryModal
          id={history.id}
          city={history.city}
          cityId={history.cityId}
          contactId={history.contactId}
          petId={history.petId}
          address={history.address}
          pet={history.pet}
          createdDate={history.createdDate}
          location={history.location}
          contact={history.contact}
          key={history.id}
        />
      ))}
    </div>
  );
}
