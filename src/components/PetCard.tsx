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
          </label>
        </label>
      </div>
    </div>
  );
}
