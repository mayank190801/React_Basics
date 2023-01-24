import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleZero}>Set Zero</button>
      <h1>{counter}</h1>
    </div>
  );
};
