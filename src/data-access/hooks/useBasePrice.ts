import { useContext } from "react";
import { eurCtx } from "../context/eurCtx";

export const useBasePrice = () => {
  const state = useContext(eurCtx);
  return state.eurInfo.basePrice;
};
