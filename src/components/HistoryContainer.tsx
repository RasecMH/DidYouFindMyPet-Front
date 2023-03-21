import HistoryMock from '../utils/HistoryMock.json';
import HistoryCard from './HistoryCard';
import HistoryModal from './HistoryModal';

interface ICity {
  id: number;
  name: string;
  stateId: number;
  state: IState;
}

interface IState {
  id: number;
  name: string;
  countryId: number;
  country: ICountry;
}

interface ICountry {
  id: number;
  name: string;
  phone: number;
  code: string;
}

interface petInfo {
  id: number;
  name: string;
  description: string;
  health: string;
  image: string;
}

interface HistoryInfo {
  id: number;
  petId: string;
  cityId: number;
  city: ICity;
  createdDate: string;
  location: string;
  address: string;
  pet: petInfo;
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
                city={history.city.name}
                address={history.address}
                petName={history.pet.name}
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
          city={history.city.name}
          address={history.address}
          petName={history.pet.name}
          createdDate={history.createdDate}
          location={history.location}
          contact={history.contact}
          key={history.id}
        />
      ))}
    </div>
  );
}
