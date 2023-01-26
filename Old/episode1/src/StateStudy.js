import { useState } from "react";

export const StateStudy = () => {
  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      {age}
      <button onClick={incrementAge}>Press me baby</button>
    </div>
  );
};
