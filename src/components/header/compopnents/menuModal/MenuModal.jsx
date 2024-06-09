import React from "react";
import { useMenuModal } from "./useMenuModal";

const MenuModal = ({ modalRef, handleOpenBurgerMenu }) => {
  const { navigate } = useMenuModal();

  return (
    <div className="menu-modal">
      <ul ref={modalRef}>
        <li>Menu</li>
        <li
          onClick={() => {
            navigate("/");
            handleOpenBurgerMenu();
          }}
        >
          Hot dishes
        </li>
        <li
          onClick={() => {
            navigate("/soups");
            handleOpenBurgerMenu();
          }}
        >
          Soups
        </li>
        <li
          onClick={() => {
            navigate("/seaFood");
            handleOpenBurgerMenu();
          }}
        >
          Seafood
        </li>
        <li
          onClick={() => {
            navigate("/desert");
            handleOpenBurgerMenu();
          }}
        >
          Dessert
        </li>
        <li
          onClick={() => {
            navigate("/drinks");
            handleOpenBurgerMenu();
          }}
        >
          Drinks
        </li>
        <li
          onClick={() => {
            navigate("/salads");
            handleOpenBurgerMenu();
          }}
        >
          Salads
        </li>
      </ul>
    </div>
  );
};
export default MenuModal;
