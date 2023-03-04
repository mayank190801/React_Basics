import { useEffect, useState } from "react";
import Button from "./components/Button";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import MoviesList from "./components/MoviesList";
import NewExpense from "./components/NewExpense";
import useCounter from "./hooks/use-counter";
import AuthContext from "./store/auth-context";
import RootLayout from "../src/components/RootLayout";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../src/pages/Home";
import ProductsPage, { loader as ProductsLoader } from "../src/pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import FormsPractise from "./pages/FormsPractise";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/products", element: <ProductsPage /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage />, loader: ProductsLoader },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "practise", element: <FormsPractise /> },
    ],
  },
]);

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

  //creating custom hooks
  const counter = useCounter();
  return <RouterProvider router={router} />;
}

// <div>
// <NewExpense />
// <ExpenseList data={data} />
// <Button addMoviesHandler={addMoviesHandler} />
// <MoviesList movies={movies} />
// {counter}
// </div>

export default App;
