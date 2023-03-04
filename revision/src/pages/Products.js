import axios from "axios";
import { Link, useLoaderData, json } from "react-router-dom";

const Products = () => {
  const events = useLoaderData();
  console.log(events);

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    console.log(proceed);
  };

  return (
    <div>
      <div>Product pagees</div>
      {events[0].id}
      <ul>
        <li>
          <Link to="/products/product-1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/product-2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/product-3">Product 3</Link>
        </li>
      </ul>
      <button onClick={startDeleteHandler}> Are you sure? </button>
    </div>
  );
};

export default Products;

//loader and shit!
export const loader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data.events;
  } catch (err) {
    throw err;
  }
};
