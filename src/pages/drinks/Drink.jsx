import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";
import "aos/dist/aos.css";
import { useDrink } from "./useDrink";
import { FallingLines } from "react-loader-spinner";

const Drink = () => {
  const { drinkProduct } = useDrink();

  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> Drinks</h1>
      </div>
      <div className="hot-dishes-content">
        {drinkProduct.length ? (
          drinkProduct.map(
            ({ id, product_image, product_name, product_price }) => (
              <HotDishesProducts
                key={id}
                aos={"fade-down"}
                img={product_image}
                price={product_price}
                title={product_name}
              />
            )
          )
        ) : (
          <div className="product-loader">
            <FallingLines
              height="120"
              width="120"
              radius="9"
              color="#f94d00"
              ariaLabel="loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Drink;
