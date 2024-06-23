import React from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useHeader } from "./useHeader";
import MenuModal from "./compopnents/menuModal/MenuModal";
import { FaArrowDown } from "react-icons/fa";
import LanguageModal from "./compopnents/languageModal/LanguageModal";
import { FaArrowTurnDown } from "react-icons/fa6";

const Header = () => {
  const {
    handleGoBasket,
    handleOpenBurgerMenu,
    handleOpenLanguageMenu,
    handleChangeLanguage,
    handleGoHome,
    languageMenu,
    burgerMenu,
    modalRef,
    languageRef,
    language,
  } = useHeader();

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-title-section" onClick={handleGoHome}>
          <h1>Nomi</h1>
        </div>

        <div className="header-menu-section">
          <div
            className="header-language-section"
            onClick={handleOpenLanguageMenu}
          >
            <span className={"header-language-changer"}>{language}</span>
            <FaArrowTurnDown style={{ fontSize: "19px", color: "white" }} />
          </div>
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

      {languageMenu && (
        <LanguageModal
          handleChangeLanguage={handleChangeLanguage}
          languageRef={languageRef}
        />
      )}

      {burgerMenu && (
        <MenuModal
          handleOpenBurgerMenu={handleOpenBurgerMenu}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};
export default Header;
