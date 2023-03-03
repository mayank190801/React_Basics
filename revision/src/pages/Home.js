import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div>Hello there</div>
      <p>
        Go to Go to <Link to="/products">product page!</Link>
      </p>
    </React.Fragment>
  );
};

export default Home;
