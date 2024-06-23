import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/feature/userWish/userWish";
import { userLanguage } from "../../store/feature/language/langeageSelector";

export const useHodDises = () => {
  const [hotDisesProduct, setHotDisesProduct] = useState([]);
  const lang = useSelector(userLanguage);
  const dispatch = useDispatch();

  const handleAddWish = (img, title, price, id) => {
    dispatch(increment({ img, title, price, id }));
  };

  useEffect(() => {
    getMenuProduct(lang, "1", setHotDisesProduct);
  }, [lang]);

  useEffect(() => {
    Aos.init();
  }, []);

  return { handleAddWish, hotDisesProduct };
};
