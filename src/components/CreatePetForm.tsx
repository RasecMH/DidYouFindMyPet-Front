import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { useSessionStorage } from 'usehooks-ts';
import uploadImage from '../utils/uploadImage';
import ReactLoading from 'react-loading';

export default function CreatePetForm() {
  const [nameValue, setNameValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [healthValue, setHealthValue] = useState<string>('');
  const [imageValue, setImageValue] = useState<FileList | null>(null);
  const [submitErrorValue, setSubmitErrorValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [sessionValue, setSessionValue] = useSessionStorage('token', '');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitErrorValue('');

    try {
      const imageLink = await uploadImage(imageValue);
      const payload = {
        name: nameValue,
        description: descriptionValue,
        health: healthValue,
        image: imageLink,
      };
      const auth = cookies.token || sessionValue;
      const res = await axios.post(
        'https://did-you-find-my-pet.vercel.app/pet/create',
        payload,
        {
          headers: {
            Authorization: auth,
          },
        }
      );
      console.log(res);
      setIsLoading(false);
      navigate(0);
    } catch (error: any) {
      setIsLoading(false);
      setSubmitErrorValue(error.response.data.message);
      console.log(error.response.data.message);
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
            required
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
            required
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
            required
            className='file-input w-full'
            // value={imageValue}
            onChange={(e) => setImageValue(e.target.files)}
          />
        </div>

        <button className='btn w-full my-3' type='submit'>
          {isLoading ? <ReactLoading type='bubbles' color='#fff' /> : 'Create'}
        </button>
        {submitErrorValue.length > 0 && (
          <div className='alert alert-error shadow-lg'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current flex-shrink-0 h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>{submitErrorValue}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
