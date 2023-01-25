import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

//this function responses make shit update na

function App() {
  const [message, setMessage] = useState("");

  //For calling the api functions for the first time!! - pretty dope if you did understand bruh
  //Seriously amazing
  useEffect(() => {
    handleApi();
    console.log("mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  //this works pretty perfectly!! - but now I want something at start as well
  //then what bro??
  const handleApi = async () => {
    //try and catch should be there bruh!! Otherwise --- that's how you play without then and all - important
    //This case worked somehoe

    //The promises version would look like something like this
    // Axios.get("https://catfact.ninja/fact").then((res) => {
    //   setMessage(res.data.fact);
    // });

    try {
      const response = await Axios.get("https://catfact.ninja/fact");
      setMessage(response.data.fact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <button onClick={handleApi}>Click me</button>
      <h5>{message}</h5>
    </div>
  );
}

//This is making some sense to me for sure!!
//This is some function right --- so basically there are two ways of doing this shit we have discussed till now
///Let's try using all of our brain cells on thi sno

export default App;
