export default function LoginForm() {
  return (
    <>
      <div className='w-1/2'>
        <h1 className='text-4xl'>Welcome Back</h1>
        <span>
          Don't have a account, <a href=''>Sign Up</a>
        </span>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='john@doe.com'
            className='input input-bordered w-full max-w-xs'
          />
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='*********'
            className='input input-bordered w-full max-w-xs'
          />
        </div>

        <div className='flex items-center justify-between mt-3'>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <input type='checkbox' checked className='checkbox mr-2' />
              <span className='label-text'>Remember me</span>
            </label>
          </div>
          <a href=''>Forget password?</a>
        </div>
        <button className='btn w-full mt-3'>Sign In</button>
      </div>
    </>
  );
}
