import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";

const Desert = () => {
  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> Desert </h1>
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

export default Desert;
