import "./ExpenseDate.css";
import { Card } from "./Card";

export const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-us", { month: "long" }); //return some string
  const year = date.getFullYear(); //return full year
  const day = date.toLocaleString("en-us", { day: "2-digit" }); //returns the day

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month} </div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};
