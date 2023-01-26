import "./App.css";
import { InputAddition } from "./InputAddition";

//Today I learned something exremely important boi
//Really Really Important
//onClick = {callHanlder(prop)} --- don't do this like that
//onClick = {() => callHandler(props)} ---- right way to do this shit boi

//You can basically function pass in the props as well!!
//How amazing is that, so suppose you want to call some function in the above component
//You simple have to pass the functions and call it inside your component

function App() {
  //trying to make a todo list
  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputAddition />
    </div>
  );
}

export default App;
