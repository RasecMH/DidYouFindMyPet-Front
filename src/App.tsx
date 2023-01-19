import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='text-1xl font-bold'>Hello world!</h1>
      <button className='btn'>Button</button>
    </div>
  );
}

export default App;
