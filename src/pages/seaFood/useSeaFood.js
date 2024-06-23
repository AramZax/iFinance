import Aos from "aos";
import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import { userLanguage } from "../../store/feature/language/langeageSelector";
import { useSelector } from "react-redux";

export const useSeaFood = () => {
  const [seaFoodProduct, setSeaFoodProduct] = useState([]);
  const lang = useSelector(userLanguage);
  useEffect(() => {
    getMenuProduct(lang, "3", setSeaFoodProduct);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);

  return { seaFoodProduct };
};
