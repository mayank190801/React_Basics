import React from "react";

export const Header = ({ cart }) => {
  console.log(cart);
  return (
    <div className="container mx-auto px-4  box-border h-64 w-64 p-4 border-4">
      <p>hey there I am header</p>

      {cart.map((element) => {
        return (
          <div key={element.id}>
            <h5>{element.id}</h5>
            <h5>{element.count}</h5>
          </div>
        );
      })}

      <button>Cart</button>
    </div>
  );
};

//just display the cart content in here na?
