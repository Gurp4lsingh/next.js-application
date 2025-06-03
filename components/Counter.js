import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setIsEven(newCount % 2 === 0);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setIsEven(newCount % 2 === 0);
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      {isEven ? (
        <p className="even">The number is even</p>
      ) : (
        <p className="odd">The number is odd</p>
      )}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}