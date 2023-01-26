import "./App.css";
import { InputText } from "./InputText";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide Text
      </button>
      {!show && <InputText />}
    </div>
  );
}

export default App;
