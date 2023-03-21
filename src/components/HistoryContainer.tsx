import HistoryMock from '../utils/HistoryMock.json';
import HistoryCard from './HistoryCard';
import HistoryModal from './HistoryModal';

interface HistoryInfo {
  id: number;
  petId: string;
  cityId: number;
  createdDate: string;
  location: string;
  address: string;
  contact: {
    id: number;
    message: string;
    phone: string;
    code: string;
  };
}

interface Props {
  historyData: HistoryInfo[] | [];
}

export default function HistoryContainer({ historyData }: Props) {
  console.log(historyData);

  return (
    <div className='w-2/3'>
      <h1 className='text-4xl'>History</h1>
      <div className='divider'></div>
      {historyData.length ? (
        <ul className='menu bg-base-100 w-full rounded-box shadow-2xl mt-4'>
          {historyData.length &&
            historyData.map((history) => (
              <HistoryCard
                id={history.id}
                city={history.cityId}
                address={history.address}
                petName={history.petId}
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
          city={history.cityId}
          address={history.address}
          petName={history.petId}
          createdDate={history.createdDate}
          location={history.location}
          contact={history.contact}
          key={history.id}
        />
      ))}
    </div>
  );
}
