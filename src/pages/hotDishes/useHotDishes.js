import { useEffect, useState } from "react";
import { getMenuProduct } from "../../api/api";
import Aos from "aos";
import { useDispatch } from "react-redux";
import { increment } from "../../store/feature/userWish/userWish";
import { toast } from "react-toastify";

export const useHodDises = () => {
  const [hotDisesProduct, setHotDisesProduct] = useState([]);
  const dispatch = useDispatch();

  const handleAddWish = (img, title, price, id) => {
    dispatch(increment({ img, title, price, id }));
    // toast("Հիանալի");
  };

  useEffect(() => {
    getMenuProduct("1", "1", setHotDisesProduct);
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return { handleAddWish, hotDisesProduct };
};
