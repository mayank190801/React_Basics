import "./ExpenseForm.css";
import { useState } from "react";

export const ExpenseForm = ({ expenses, setExpensesHandler }) => {
  //You can do this stuff using one object state and all, but I find it rather complicated
  //Bullshit bruh!
  const [titleVal, setTitleVal] = useState("");
  const [amountVal, setAmountVal] = useState("");
  const [dateVal, setDateVal] = useState("");

  //Basically what they are saying here is no matter what,
  //You will always recieve! Always recieve string from event.target.value
  //Simple as that
  //You can multiple states or single state -- if you think about it
  //   setAmountVal((prevState) => {
  //     return {...prevState, random}
  //   })
  //The above method should be used bruh --- pretty important for sure

  //Come back and do that stuff bruh!!
  //Two things we learned here that are extremely important with forms and shit
  //Two way binding and all that kinda stuff bruh -- if you ask me about it would be so fun

  //Two way binding is dope as fuck bruh!! - not gonna lie pretty dope ass cool for sure
  //Gatther use input and update user input

  const submitHandler = (event) => {
    event.preventDefault(); //the page will now not reload!!

    const inputData = {
      id: "e4",
      title: titleVal,
      amount: amountVal,
      date: new Date(dateVal),
    };

    console.log(inputData);

    //Here he is telling that it might expenses got updated by the time we are at this function
    //like give previous data as paremeter and then use it for your own benefits brother
    setExpensesHandler((expenses) => {
      return [inputData, ...expenses];
    });
    setTitleVal("");
    setAmountVal("");
    setDateVal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleVal}
            onChange={(event) => {
              setTitleVal(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={amountVal}
            onChange={(event) => {
              setAmountVal(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={dateVal}
            onChange={(event) => {
              setDateVal(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
