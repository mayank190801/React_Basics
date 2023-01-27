import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./ExpenseItem.css";
import { useState } from "react";

export const ExpenseItem = ({ title, amount, date }) => {
  //lets figure this stuf fout
  //so basically you have to convert Date object to String nowadays
  //That was the bloody error for sure
  //Use state should be used here only!! - THE PERFECT POSITIONl
  const [titleName, setTitleName] = useState(title);

  const clickHandler = () => {
    setTitleName("Updated");
    //This above takes some time to make this happen
    //So instanlty below this we can not use the value
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleName}</h2>
        <div className="expense-item__price">Rs. {amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
};
