import { FoodItem } from "./FoodItem";

export const Menu = ({ foodData, incrementCartHandler }) => {
  return (
    <div>
      {foodData.map((food) => {
        return (
          <FoodItem
            id={food.id}
            name={food.name}
            desc={food.desc}
            price={food.price}
            incrementCartHandler={incrementCartHandler}
          />
        );
      })}
    </div>
  );
};
