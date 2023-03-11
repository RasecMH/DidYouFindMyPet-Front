import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapInfo {
  center: {
    lat: number;
    lng: number;
  };
  petName: string;
}

export default function Map({ center, petName }: MapInfo) {
  return (
    <div className='h-80 w-full'>
      <MapContainer
        className='h-full w-full'
        center={[center.lat, center.lng]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[center.lat, center.lng]}>
          <Popup>{petName} was here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
