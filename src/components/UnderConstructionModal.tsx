export default function UnderConstructionModal() {
  return (
    <div>
      <input
        type='checkbox'
        id='under-construction-modal'
        className='modal-toggle'
      />
      <label
        htmlFor='under-construction-modal'
        className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <h3 className='text-lg font-bold text-center'>
            🚧 Under Construction 🚧
          </h3>
        </label>
      </label>
    </div>
  );
}
