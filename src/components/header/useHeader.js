import { useRef, useState } from "react";
import useOutsideClick from "../../hlepers/outSideClick";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  //function for open header menu
  const handleOpenBurgerMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  //function for uer basket
  const handleGoBasket = () => {
    navigate("/basket");
  };

  useOutsideClick(modalRef, handleOpenBurgerMenu);

  return {handleGoBasket, handleOpenBurgerMenu, burgerMenu, modalRef };
};
