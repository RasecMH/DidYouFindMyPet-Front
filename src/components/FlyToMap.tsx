import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Props {
  center: {
    lat: number;
    lng: number;
  };
}

export default function FlyMapTo({ center }: Props) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center);
  }, [center]);

  return null;
}
