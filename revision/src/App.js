import { useEffect, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense";
import AuthContext from "./store/auth-context";

function App() {
  const name = "Singh";
  const [normal, setNormal] = useState("");
  const setHandler = () => {
    setNormal("random");
  };

  //always first simple as that
  useEffect(() => {
    console.log("Mounting process!");
  }, [normal]);

  useEffect(() => {
    setTimeout(() => {
      setNormal("random");
    }, 500);

    //clean up executes before useEffect() function works, not the first time ofc
    return () => {};
  });

  const data = [{ name: "Mayank" }, { name: "Sanvi" }];
  // const data = [];

  return (
    <div>
      Hello current buddy!! How are you??
      {normal}
      <AuthContext.Provider
        value={{
          isLoggedIn: true,
        }}
      >
        <NewExpense />
      </AuthContext.Provider>
      <ExpenseList data={data} />
    </div>
  );
}

export default App;
