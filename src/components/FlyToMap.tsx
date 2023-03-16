import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface flyInt {
  center: {
    lat: number;
    lng: number;
  };
}

export default function FlyMapTo({ center }: flyInt) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center);
  }, [center]);

  return null;
}
