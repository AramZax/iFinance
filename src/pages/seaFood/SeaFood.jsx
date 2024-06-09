import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";

const Seafood = () => {
  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> SeaFood </h1>
      </div>
      <div className="hot-dishes-content">
        <HotDishesProducts />
        <HotDishesProducts />
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
export default Seafood;
