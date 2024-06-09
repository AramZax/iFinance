import { useRef, useState } from "react";
import useOutsideClick from "../../hlepers/outSideClick";


export const useHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const modalRef = useRef();


  //function for open header menu
  const handleOpenBurgerMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  useOutsideClick(modalRef, handleOpenBurgerMenu);

  return { handleOpenBurgerMenu,  burgerMenu, modalRef };
};
