import { useState } from "react";

export const ColorShifter = () => {
  //shape shifter
  //some boolean to hide this text
  const [showText, changeShowText] = useState(true);

  const handleEventText = (event) => {
    changeShowText(!showText);
  };

  return (
    <div>
      <button onClick={handleEventText}>SHOW/HIDE</button>
      <h1 style={{ color: showText ? "green" : "red" }}>MY NAME IS MAYANK</h1>
    </div>
  );
};

// {showText && <h1 style={{color : showText ? "green" : "red"}}>MY NAME IS MAYANK</h1>}
