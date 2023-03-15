import { useState } from 'react';
import uploadImage from '../utils/uploadImage';

export default function CreatePetForm() {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [healthValue, setHealthValue] = useState('');
  const [imageValue, setImageValue] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imageValue) {
      console.log(await uploadImage(imageValue[0]));
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='w-full'>
        <h1 className='text-4xl mb-4'>Create Pet</h1>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Pet name'
            className='input input-bordered w-full'
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <textarea
            rows={50}
            className='input input-bordered w-full h-32'
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Health</span>
          </label>
          <textarea
            rows={50}
            className='input input-bordered w-full h-24'
            value={healthValue}
            onChange={(e) => setHealthValue(e.target.value)}
          />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Image</span>
          </label>
          <input
            type='file'
            className='file-input w-full'
            // value={imageValue}
            onChange={(e) => setImageValue(e.target.files)}
          />
        </div>

        <button className='btn w-full mt-3'>Create</button>
      </form>
    </>
  );
}
