import React from "react";
import Fruit from "./Fruit";
function Fruits() {
  let fruit = [
    { name: "Apple", price: 100 },
    { name: "Mango", price: 200 },
    { name: "Watermelon", price: 150 }
  ];
  return (
    <div>
      {fruit.map((fruits) => (
        <Fruit name={fruits.name} price={fruits.price}></Fruit>
      ))}
    </div>
  );
}

export default Fruits
