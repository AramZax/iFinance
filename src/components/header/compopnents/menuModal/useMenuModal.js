import { useNavigate } from "react-router-dom";

export const useMenuModal = () => {
  const navigate = useNavigate();
  return {navigate};
};
