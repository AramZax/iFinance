import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";
import { userLanguage } from "../../store/feature/language/langeageSelector";
import { useSelector } from "react-redux";

export const useSoup = () => {
  const [soupProduct, setSoupProduct] = useState([]);
  const lang = useSelector(userLanguage);
  useEffect(() => {
    getMenuProduct(lang, "2", setSoupProduct);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);
  return { soupProduct };
};
