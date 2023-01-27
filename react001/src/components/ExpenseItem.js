import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";
import "./ExpenseItem.css";

export const ExpenseItem = ({ title, amount, date }) => {
  //lets figure this stuf fout
  //so basically you have to convert Date object to String nowadays
  //That was the bloody error for sure

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs. {amount}</div>
      </div>
    </Card>
  );
};
