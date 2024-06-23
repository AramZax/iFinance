import Aos from "aos";
import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";

export const useDrink = () => {
  const [drinkProduct, setDrinkProduct] = useState([]);

  useEffect(() => {
    getMenuProduct("1", "5", setDrinkProduct);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return { drinkProduct };
};
