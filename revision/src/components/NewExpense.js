import { useRef, useState } from "react";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const NewExpense = () => {
  //creating a ref for our use!!
  const nameInputRef = useRef();
  console.log(nameInputRef);

  const [inputValue, setInputValue] = useState("");

  //removing default behaviour

  //simply taking input from user
  const inputHandler = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  //Just keep it in here for revision and other purposes
  const inputtHanlder = (event) => {
    //This ensure that you are always updating on the basis of the previous state
    setInputValue((prevState) => {
      return "some value using previous vaue";
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //You can do anything you want before submitting
    console.log("I am going to submit the form");
    //back to nil simple as that
    setInputValue("");
  };

  const ctx = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>{inputValue}</div>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={inputValue}
            onChange={inputHandler}
            ref={nameInputRef}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
