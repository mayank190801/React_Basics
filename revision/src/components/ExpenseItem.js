import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const name = "Mayank Singh";
  return (
    <div className="colorful">
      Hey there {name} buddy {props.name}
    </div>
  );
};

export default ExpenseItem;
