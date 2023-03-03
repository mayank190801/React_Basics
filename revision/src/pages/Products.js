import axios from "axios";
import { Link, useLoaderData, json } from "react-router-dom";

const Products = () => {
  const events = useLoaderData();

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
    </div>
  );
};

export default Products;

//loader and shit!
export const loader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/eventss");

    if (!response.ok) {
      throw { message: "could not fetch data" };
    } else {
      return response.data.events;
    }
  } catch (err) {
    throw err;
  }
};
