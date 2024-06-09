import React from "react";
import "./hotDishesProducts.scss";

const HotDishesProducts = () => {
  return (
    <div className="hot-dishes-products-wrapper">
      <div className="hot-dishes-products-img-section">
        <img
          src="https://public.minio.cf5.io/tashir-production/static/origin/variant/%D5%B1%D5%BE%D5%A1%D5%B1%D5%A5%D5%B2.png"
          alt="..."
        />
      </div>
      <div className="hot-dishes-products-title-section">
        <span>Hot dish</span>
      </div>
      <div className="hot-dishes-products-pricie-section">
        <span>50 usd</span>
      </div>
    </div>
  );
};
export default HotDishesProducts;
