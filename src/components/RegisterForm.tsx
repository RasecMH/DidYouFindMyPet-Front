export default function RegisterForm() {
  return (
    <>
      <div className='w-2/3'>
        <h1 className='text-4xl'>Create account</h1>
        <span>
          Alreary have a account, <a href=''>Sign In</a>
        </span>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='John Doe'
            className='input input-bordered w-full'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='John@doe.com'
            className='input input-bordered w-full'
          />
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='*********'
            className='input input-bordered w-full'
          />
        </div>

        <div className='flex gap-2'>
          <div className='form-control w-2/3'>
            <label className='label'>
              <span className='label-text'>City</span>
            </label>
            <input
              type='text'
              placeholder='New York'
              className='input input-bordered w-full'
            />
          </div>

          <div className='form-control w-1/3'>
            <label className='label'>
              <span className='label-text'>State</span>
            </label>
            <input
              type='text'
              placeholder='NY'
              className='input input-bordered w-full'
            />
          </div>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Address</span>
          </label>
          <input
            type='text'
            placeholder='Street 123'
            className='input input-bordered w-full'
          />
        </div>

        <button className='btn w-full mt-3'>Sign Up</button>
      </div>
    </>
  );
}
