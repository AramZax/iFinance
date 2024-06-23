import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";

export const useDesert = () => {
  const [desertProduct, setDesertProduct] = useState([]);

  useEffect(() => {
    getMenuProduct("1", "4", setDesertProduct);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return { desertProduct };
};
