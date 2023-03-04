export default function HistoryContainer() {
  return (
    <div className='w-2/3'>
      <h1 className='text-4xl'>History</h1>
      <div className='divider'></div>
      <ul className='menu bg-base-100 w-full rounded-box shadow-2xl mt-4'>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
