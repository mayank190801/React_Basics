import "./App.css";
import Axios from "axios";

function App() {
  const dataRecent = data(); //this data is an async function na! so it will return promise at all cost
  console.log(dataRecent);
  return <div className="App">Hey there</div>;
}

//This is making some sense to me for sure!!
const data = async () => {
  const response = await Axios.get("https://catfact.ninja/fact");
  console.log(response.data.fact);
  return response;
};

export default App;
