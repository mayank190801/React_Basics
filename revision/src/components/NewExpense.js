import { useState } from "react";

const NewExpense = () => {
  const [inputValue, setInputValue] = useState("");

  //simply taking input from user
  const inputHandler = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <form>
        <div>{inputValue}</div>
        <div>
          <label>Name</label>
          <input type="text" onChange={inputHandler} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
