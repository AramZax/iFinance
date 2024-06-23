import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";
import { useHodDises } from "./useHotDishes";
import { FallingLines } from "react-loader-spinner";
import "./hotDishes.scss";

const HotDishes = () => {
  const { handleAddWish, hotDisesProduct } = useHodDises();
  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> Hot Dishes</h1>
      </div>
      <div className="hot-dishes-content">
        {hotDisesProduct?.length ? (
          hotDisesProduct.map(
            ({ id, product_image, product_name, product_price }) => {
              return (
                <HotDishesProducts
                  key={id}
                  id={id}
                  img={product_image}
                  title={product_name}
                  price={product_price}
                  aos={"fade-down"}
                  addBasket={handleAddWish}
                />
              );
            }
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
export default HotDishes;
