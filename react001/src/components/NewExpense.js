import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ expenses, setExpensesHandler }) => {
  return (
    <div className="new-expense">
      <ExpenseForm
        expenses={expenses}
        setExpensesHandler={setExpensesHandler}
      />
    </div>
  );
};
