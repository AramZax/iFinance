import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";

export const useSalads = () => {
  const [saladsProducts, setSaladsProducts] = useState([]);

  useEffect(() => {
    getMenuProduct("1", "6", setSaladsProducts);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);
  return { saladsProducts };
};
