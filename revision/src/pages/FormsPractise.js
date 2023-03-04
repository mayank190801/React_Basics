import { useRef, useState } from "react";

//ref or useState!! (simple as that, these two methods are there for us)
//Remember that brother!

const FormsPractise = () => {
  //using onChange for keeping the track of values!!
  //event.target.value!! (simple as that)
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const updateNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    } else {
      setEnteredNameIsValid(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredName);
    console.log(enteredValue);

    // nameInputRef.current.value = ""; ==> NOT IDEAL BROTHER!!
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name"> Your name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={updateNameHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p>Name must not be empty!</p>}
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormsPractise;
