import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPet } from '../interfaces/PetInterface';

export default function PetCard({
  id,
  name,
  description,
  health,
  image,
}: IPet) {
  const [qrCodeBlob, setQrCodeBlob] = useState<string>('');
  const qrCodeLink =
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
  const urlPath =
    import.meta.env.VERCEL_URL ||
    'https://did-you-find-my-pet-front.vercel.app';
  const encodedUrl = encodeURIComponent(`${urlPath}/pet/${id}`);
  const qrCodeWithUrl = `${qrCodeLink}${encodedUrl}`;
  console.log(qrCodeWithUrl);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(qrCodeWithUrl, { responseType: 'blob' })
        .then((response) => {
          if (response.data) {
            return window.URL.createObjectURL(
              new File([response.data], name, { type: response.data.type })
            );
          }
          return qrCodeWithUrl;
        });
      return setQrCodeBlob(data);
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='card w-72 h-72 bg-base-100 shadow-2xl'>
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
            <h3 className='text-3xl font-bold mb-5'>{name}</h3>
            <h1 className='text-lg font-bold'>Description:</h1>
            <p className='py-2'>{description}</p>
            <h1 className='text-lg font-bold'>Health:</h1>
            <p className='py-2'>{health}</p>
            <div className='flex flex-col gap-6 mt-5 justify-center items-center'>
              <img src={qrCodeBlob} />
              <a href={qrCodeBlob} download={name} target='_blank'>
                <button type='button' className='btn'>
                  DOWNLOAD
                </button>
              </a>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}
