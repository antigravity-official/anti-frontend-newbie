import { useContext } from "react";
import AppContext from "../AppContext";

const useInfoContentViewModel = () => {
  const eurInfo = useContext(AppContext);
  const { basePrice, openingPrice, changePrice } = eurInfo;

  const changeGap = basePrice - openingPrice;
  const changeRate = ((changePrice / basePrice) * 100).toFixed(2);

  return { changeGap, changeRate };
};

export default useInfoContentViewModel;
