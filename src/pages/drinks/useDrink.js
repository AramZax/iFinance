import Aos from "aos";
import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import { userLanguage } from "../../store/feature/language/langeageSelector";
import { useSelector } from "react-redux";

export const useDrink = () => {
  const [drinkProduct, setDrinkProduct] = useState([]);
  const lang = useSelector(userLanguage);

  useEffect(() => {
    getMenuProduct(lang, "5", setDrinkProduct);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);

  return { drinkProduct };
};
