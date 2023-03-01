import { useEffect, useState } from "react";
import Button from "./components/Button";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import MoviesList from "./components/MoviesList";
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

  //Making some states and shit, for us to use and be with friend with it
  const [movies, setMovies] = useState([
    { episode_id: 1, title: "Dhoni" },
    { episode_id: 2, title: "Virat" },
  ]);

  const addMoviesHandler = (moviesData) => {
    //Adding more movies in the database simple as that
    setMovies((prevMovies) => {
      return [...prevMovies, ...moviesData];
    });
  };

  return (
    <div>
      <NewExpense />
      <ExpenseList data={data} />
      <Button addMoviesHandler={addMoviesHandler} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
