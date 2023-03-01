import React from "react";
import ExpenseItem from "./ExpenseItem";

//much cleaner solution
const ExpenseList = ({ data }) => {
  if (data.length === 0) return <p>Nothing is here</p>;
  return (
    <React.Fragment>
      {data.length > 0 &&
        data.map((cdata) => {
          return <ExpenseItem name={cdata.name}></ExpenseItem>;
        })}
    </React.Fragment>
  );
};

export default ExpenseList;
