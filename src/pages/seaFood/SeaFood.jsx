import React from "react";
import HotDishesProducts from "../poriductsComponents/products/HotDishesProducts";
import { useSeaFood } from "./useSeaFood";
import { FallingLines } from "react-loader-spinner";

const Seafood = () => {
  const { seaFoodProduct } = useSeaFood();
  return (
    <div className="hot-dishes-wrapper">
      <div className="hot-dishes-title-section">
        <h1> SeaFood </h1>
      </div>
      <div className="hot-dishes-content">
        {seaFoodProduct?.length ? (
          seaFoodProduct.map(
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
export default Seafood;
