//So called root component bruh
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";
import { useState } from "react";

//Always remeber css is not that hard, you can always learn it, and pick up already created
//You could be talking about wrapper components right?? pretty cool for sure
//What is this bottom up approach people are cyring about huh??
//Pretty obvious in my point of view that you just have to send the data above by using function pointers
//Now that's upto how you design, and later on we will have better solutions and we will figure about it later
//No worries

//Couple of components that manages some states or do not manage states!!
//

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  //I might have to right some function to add that stuff in the above bad boi

  return (
    <div>
      <NewExpense expenses={expenses} setExpensesHandler={setExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
