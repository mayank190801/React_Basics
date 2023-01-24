import { useState } from "react";

export const InputState = () => {
  const [inputValue, updateVal] = useState("");

  //some javascript DOM shit, which you are actually very poor at, but you know you will figure out
  //Don't anything data science for sure --- some actual hard work is required that's it buddy
  const handleInputChange = (event) => {
    updateVal(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange}></input>
      {inputValue}
    </div>
  );
};
