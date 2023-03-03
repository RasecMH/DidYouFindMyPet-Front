export default function LoginForm() {
  return (
    <>
      <div>
        <h1 className='text-4xl'>Welcome Back</h1>
        <span>Don't have a account, Sign Up</span>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>

        <div className='flex items-center'>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <input type='checkbox' checked className='checkbox' />
              <span className='label-text'>Remember me</span>
            </label>
          </div>
          <a href=''>Forget password?</a>
        </div>
        <button className='btn btn-wide'>Sign In</button>
      </div>
    </>
  );
}
