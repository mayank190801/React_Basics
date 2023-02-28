import ExpenseItem from "./components/ExpenseItem";

function App() {
  const name = "Singh";
  return (
    <div>
      Hello current buddy!! How are you??
      <ExpenseItem title="toilet Paper" name={name} />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
