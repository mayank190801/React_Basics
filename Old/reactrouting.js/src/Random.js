import Axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "./index";

//When the first time you are calling any function you would require to use this bad boi
export const loader = async () => {
  const data = await Axios.get("https://random.dog/woof.json");

  return data.data.url;
};

export const Random = () => {
  const dataUrl = useLoaderData();

  //yaha ek button daal dete hai jo udpate krega suppose
  //Pre calls of the api ke liye we can use this stupid ass technique for sure
  const { username } = useContext(AppContext);
  console.log(username);

  //   console.log(dataUrl);
  return (
    <div>
      {" "}
      <h1>Hello there buddy I am the random page for youuu</h1>
      <img src={dataUrl}></img>
    </div>
  );
};
// <img src={dataUrl}></img>
