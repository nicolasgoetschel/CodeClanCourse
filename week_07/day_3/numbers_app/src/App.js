import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [squaredNumber, setSquaredNumber] = useState(1);

  useEffect(() => {
    setSquaredNumber(number*number);
  }, [number])

  function incrementNumber() {
    setNumber(number+1);
  }
  function decrementNumber() {
    setNumber(number-1);
  }

  return (
    <div className="App">
      <p>The number is {number}</p>
      <p>{number} sqaured is {squaredNumber}</p>
      <button onClick={decrementNumber}>-</button>
      <button onClick={incrementNumber}>+</button>
    </div>
  );
}

export default App;
