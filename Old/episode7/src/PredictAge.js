import { useState, useEffect } from "react";
import Axios from "axios";

// https://api.agify.io/?name=mayank
export const PredictAge = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [age, setAge] = useState("0");

  const handleAge = async (name) => {
    const apiCall = `https://api.agify.io/?name=${name}`;
    console.log("called");
    try {
      const apiData = await Axios.get(apiCall);
      console.log(apiData);
      setAge(apiData.data.age);
    } catch (err) {
      console.log(err);
    }

    console.log("Recieved");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setInputMessage(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleAge(inputMessage);
        }}
      >
        Submit
      </button>
      {age == null ? <h1> fuck you </h1> : <h1>{age}</h1>}
    </div>
  );
};
