import React from "react";
import { userWish } from "../../store/feature/userWish/userWishSelector";
import { useSelector } from "react-redux";

const Basket = () => {
  const wish = useSelector(userWish);
  console.log(wish, "wish");
  return <div>basket</div>;
};
export default Basket;
