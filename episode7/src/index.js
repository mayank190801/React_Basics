import React from "react";
import ReactDOM from "react-dom/client";
import { Execuses } from "./Excuses";
import { PredictAge } from "./PredictAge";

//So basically if you want to be smart about it
//How to fetch data from api??? -- important lesson you might have forgotten buddy
//fetch('url').then(()).then() --- something like this you can figure out

//But a better library is there for doing all this stuff
//Axios is there for your rescue in this task

// https://api.agify.io/?name=mayank

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Execuses />
  </React.StrictMode>
);
