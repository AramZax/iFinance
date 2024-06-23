import Aos from "aos";
import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";

export const useSeaFood = () => {
  const [seaFoodProduct, setSeaFoodProduct] = useState([]);
  useEffect(() => {
    getMenuProduct("1", "3", setSeaFoodProduct);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return { seaFoodProduct };
};
