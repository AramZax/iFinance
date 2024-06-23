import { useRef, useState } from "react";
import useOutsideClick from "../../hlepers/outSideClick";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLange } from "../../store/feature/language/language";

export const useHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [language, setLanguage] = useState("Arm");
  const modalRef = useRef();
  const languageRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //function for open header menu
  const handleOpenBurgerMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  //function for uer basket
  const handleGoBasket = () => {
    navigate("/basket");
  };

  //function for go home
  const handleGoHome = () => {
    navigate("/");
  };

  //function for close menud modal
  useOutsideClick(modalRef, handleOpenBurgerMenu);

  //function for open language menu
  const handleOpenLanguageMenu = () => {
    setLanguageMenu((prev) => !prev);
  };
  //function for close langugae modal
  useOutsideClick(languageRef, handleOpenLanguageMenu);

  //function for change language
  const handleChangeLanguage = (lang, shortLang) => {
    dispatch(changeLange({ lang }));
    setLanguage(shortLang);
    handleOpenLanguageMenu();
  };

  return {
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
  };
};
