//I will get my css one of the strongest points in the future, UI/UX should be on point for sure

import { useState } from "react";

export const FoodItem = ({ id, name, desc, price, incrementCartHandler }) => {
  //for this specific component we can make some state no??
  const [input, setInput] = useState(0);

  return (
    <div className="box-border h-64 w-64 p-4 border-4 ">
      <h1>{name}</h1>
      <p>{desc}</p>
      <h4>{price}</h4>

      <div className="flex flex-row">
        <p>Amount</p>
        <input
          type="number"
          className="bg-slate-100"
          onChange={(event) => {
            setInput(Number(event.target.value));
          }}
        />
      </div>

      <button
        onClick={() => {
          incrementCartHandler({ id: id, count: input });
        }}
      >
        Add
      </button>
    </div>
  );
};

//After clicking
