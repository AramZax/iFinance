import React from "react";
import "./hotDishesProducts.scss";
import Button from "../../../components/button/Button";

const HotDishesProducts = ({ aos, addBasket, img, title, price, id }) => {
  return (
    <div className="hot-dishes-products-wrapper" data-aos={aos}>
      <div className="hot-dishes-products-img-section">
        <img src={img} alt="..." />
      </div>
      <div className="hot-dishes-products-title-section">
        <span>{title}</span>
      </div>
      <div className="hot-dishes-products-pricie-section">
        <span>{price} Դրամ</span>
      </div>
      <div>
        <Button
          label={"add in basket"}
          className={"basket-button"}
          onClick={() => addBasket(img, title, price, id)}
        />
      </div>
    </div>
  );
};
export default HotDishesProducts;
