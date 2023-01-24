import { Task } from "./Task";
import { useState } from "react";

export const InputAddition = () => {
  const [taskArr, setArr] = useState([]); //initially the array is empty for sure
  const [inputVal, setVal] = useState("");

  const handleInputVal = (event) => {
    setVal(event.target.value);
  };

  const handleAddition = () => {
    taskArr.push(inputVal);
    setArr([...taskArr]);
    console.log(taskArr);
  };

  return (
    <div>
      <div className="above">
        <input type="text" onChange={handleInputVal}></input>
        <button onClick={handleAddition}>Add</button>
      </div>
      <div className="list">
        {taskArr.map((message, key) => {
          return <Task task={message} key={key} />;
        })}
      </div>
    </div>
  );
};
