export default function CreatePetForm() {
  return (
    <>
      <div className='w-full'>
        <h1 className='text-4xl mb-4'>Create Pet</h1>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Pet name'
            className='input input-bordered w-full'
          />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <textarea rows={50} className='input input-bordered w-full h-32' />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Health</span>
          </label>
          <textarea rows={50} className='input input-bordered w-full h-24' />
        </div>

        <div className='form-control w-full mb-2'>
          <label className='label'>
            <span className='label-text'>Image</span>
          </label>
          <input type='file' className='file-input w-full' />
        </div>

        <button className='btn w-full mt-3'>Create</button>
      </div>
    </>
  );
}
