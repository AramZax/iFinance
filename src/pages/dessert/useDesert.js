import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";
import { useSelector } from "react-redux";
import { userLanguage } from "../../store/feature/language/langeageSelector";

export const useDesert = () => {
  const [desertProduct, setDesertProduct] = useState([]);
  const lang = useSelector(userLanguage);

  useEffect(() => {
    getMenuProduct(lang, "4", setDesertProduct);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);
  return { desertProduct };
};
