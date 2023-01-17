import { useContext } from "react";
import { eurCtx } from "../context/eurCtx";

export const useChangePrice = () => {
  const state = useContext(eurCtx);
  return state.eurInfo.changePrice;
};
