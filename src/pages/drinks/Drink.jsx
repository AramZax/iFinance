import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";

const Drink = () => {
  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> Drinks</h1>
      </div>
      <div className="hot-dishes-content">
        <HotDishesProducts />
        <HotDishesProducts />
        <HotDishesProducts />
        <HotDishesProducts />
        <HotDishesProducts />
        <HotDishesProducts />
        <HotDishesProducts />
      </div>
    </div>
  );
};
export default Drink;
