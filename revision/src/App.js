import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

function App() {
  const name = "Singh";
  return (
    <div>
      Hello current buddy!! How are you??
      <NewExpense />
      <ExpenseItem title="toilet Paper" name={name} />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
