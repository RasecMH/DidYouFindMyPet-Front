import { useEffect, useState } from 'react';
import axios from 'axios';

interface petInfo {
  id: number;
  name: string;
  description: string;
  health: string;
  qrCode: string;
  image: string;
}

export default function PetCard({
  id,
  name,
  description,
  health,
  qrCode,
  image,
}: petInfo) {
  const [qrCodeBlob, setQrCodeBlob] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(qrCode, { responseType: 'blob' })
        .then((response) => {
          if (response.data) {
            return window.URL.createObjectURL(
              new File([response.data], name, { type: response.data.type })
            );
          }
          return qrCode;
        });
      return setQrCodeBlob(data);
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='card w-80 h-80 bg-base-100 shadow-2xl'>
        <figure>
          <img src={image} alt='Shoes' />
        </figure>
        <div className='card-body items-center justify-center text-center'>
          <h2 className='card-title'>{name}</h2>
          <div className='card-actions'>
            <label htmlFor={`${name}-${id}`} className='btn btn-primary'>
              View
            </label>
          </div>
        </div>
      </div>

      <div>
        <input type='checkbox' id={`${name}-${id}`} className='modal-toggle' />
        <label htmlFor={`${name}-${id}`} className='modal cursor-pointer'>
          <label className='modal-box relative' htmlFor=''>
            <h3 className='text-lg font-bold'>{name}</h3>
            <p className='py-4'>{description}</p>
            <p className='py-4'>{health}</p>
            <img src={qrCode} />
            <a href={qrCodeBlob} download={name} target='_blank'>
              <button type='button' className='btn'>
                DOWNLOAD
              </button>
            </a>
          </label>
        </label>
      </div>
    </div>
  );
}
