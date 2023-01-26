import { useState, useEffect } from "react";

export const InputText = () => {
  const [message, setMessage] = useState("");

  //This works flawlessy, but we will use and learn it more in future for best practise for sure
  //Just fiinish this beginner course as fast and as soon as possible, and start contributing
  useEffect(() => {
    console.log("Componend Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      ></input>
      <h1>{message}</h1>
    </div>
  );
};
