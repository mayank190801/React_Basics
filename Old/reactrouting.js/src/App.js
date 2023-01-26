import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";

//so how does routing actually works in here and then we will move on for sure
//So you have to import these stuff into your application
//let's suppose create a function for some cool

//another sexy hook

function App() {
  //App is the entire application right , so using the <Outlet> shit we might be able to reproduce the effects
  return (
    <div>
      <h1>I will always stay no matter what brother </h1>
      <Link to="contacts/1">Contacts page</Link>
      <Link to="random">Random page</Link>
      <div className="App">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
