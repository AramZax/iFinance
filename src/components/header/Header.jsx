import React from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useHeader } from "./useHeader";
import MenuModal from "./compopnents/menuModal/MenuModal";

const Header = () => {
  
  const { handleGoBasket, handleOpenBurgerMenu, burgerMenu, modalRef } =
    useHeader();

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-title-section">
          <h1>Nomi</h1>
        </div>

        <div className="header-menu-section">
          <RiShoppingBasketLine
            className="header-bassket-icon"
            onClick={handleGoBasket}
          />
          <RxHamburgerMenu
            className="header-burger-icon"
            onClick={handleOpenBurgerMenu}
          />
        </div>
      </div>

      {burgerMenu && (
        <MenuModal
          modalRef={modalRef}
          handleOpenBurgerMenu={handleOpenBurgerMenu}
        />
      )}
    </div>
  );
};
export default Header;
