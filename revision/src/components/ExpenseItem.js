import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let count = 0;
  const [namer, setNamer] = useState("shitty");
  const clickHandler = () => {
    setNamer(count);
  };

  const clickHandler2 = () => {
    count++;
  };

  const name = "Mayank Singh";
  return (
    <div className="colorful">
      Hey there {namer} buddy {props.name}
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler2}>increse count</button>
    </div>
  );
};

export default ExpenseItem;
