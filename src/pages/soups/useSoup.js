import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";

export const useSoup = () => {
  const [soupProduct, setSoupProduct] = useState([]);
  useEffect(() => {
    getMenuProduct("1", "2", setSoupProduct);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return { soupProduct };
};
