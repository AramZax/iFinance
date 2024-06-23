import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";
import { userLanguage } from "../../store/feature/language/langeageSelector";
import { useSelector } from "react-redux";

export const useSalads = () => {
  const [saladsProducts, setSaladsProducts] = useState([]);
  const lang = useSelector(userLanguage);

  useEffect(() => {
    getMenuProduct(lang, "6", setSaladsProducts);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);
  return { saladsProducts };
};
