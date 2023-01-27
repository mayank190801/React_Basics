import "./Expenses.css";
import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "./Card";
import ExpensesFilter from "./ExpenseFilter";

export const Expenses = ({ expenses }) => {
  //Yaha pr map ki jagah filter lga dene ka hai boss simple
  //Filter by year krne ka hai ka boss!!
  const [year, setYear] = useState("2021");
  //on the basis of this year filter all that shit below
  //So basially that's how it works
  const filteredArr = expenses.filter((data) => {
    return data.date.getFullYear() === Number(year);
  });

  //so maybe now it is working fine

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={year} setYear={setYear} />
        {filteredArr.length === 0 ? (
          <h1 style={{ color: "white", alignContent: "center" }}>
            No Item present
          </h1>
        ) : (
          filteredArr.map((data) => {
            return (
              <ExpenseItem
                key={Math.random()}
                title={data.title}
                date={data.date}
                amount={data.amount}
              />
            );
          })
        )}
      </Card>
    </div>
  );
};
