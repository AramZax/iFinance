import React from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useHeader } from "./useHeader";
import MenuModal from "./compopnents/menuModal/MenuModal";

const Header = () => {
  const { handleOpenBurgerMenu, burgerMenu, modalRef } = useHeader();

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-title-section">
          <h1>Nomi</h1>
        </div>
        <div className="header-menu-section" onClick={handleOpenBurgerMenu}>
          <RxHamburgerMenu className="header-burger-icon" />
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
