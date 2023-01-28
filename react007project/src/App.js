import "./App.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { useState } from "react";

//let's play with this bad boy
const dishes = [
  {
    id: 1,
    name: "Sushi",
    desc: "Best in the world",
    price: 23,
  },
  {
    id: 2,
    name: "Chicken Roll",
    desc: "Best in the world",
    price: 120,
  },
  {
    id: 3,
    name: "Momos",
    desc: "Best in the world",
    price: 30,
  },
  {
    id: 4,
    name: "Rajma",
    desc: "Best in the world",
    price: 50,
  },
  {
    id: 5,
    name: "Burger",
    desc: "Best in the world",
    price: 60,
  },
];

//currently the cart is empty for sure
//cart as soon as updates, it updates a lot of shit!!

function App() {
  const [cart, updateCart] = useState([]);

  //Extremely poor function but it works somehow -- let's move on to next thing
  const incrementCartHanlder = ({ id, count }) => {
    console.log(id);
    const nCart = [...cart];
    let found = false;
    nCart.forEach((data) => {
      if (data.id === id) found = true;
    });

    console.log(found);
    if (!found) {
      nCart.push({ id, count });
      updateCart(nCart);
    } else {
      let ncount = 0;
      const nnCart = nCart.filter((data) => {
        if (data.id === id) {
          ncount = data.count;
          return false;
        }
        return true;
      });

      nnCart.push({ id, count: count + ncount });
      updateCart(nnCart);
    }

    //no matter what come up with some logic to make it happen boss
  };

  console.log("INside app");
  console.log(cart);

  return (
    <div>
      <Header cart={cart} />
      <Menu foodData={dishes} incrementCartHandler={incrementCartHanlder} />
    </div>
  );
}

export default App;
