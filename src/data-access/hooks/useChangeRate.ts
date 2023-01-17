import { useContext } from "react";
import { eurCtx } from "../context/eurCtx";

export const useChangeRate = () => {
  const state = useContext(eurCtx);
  return ((state.eurInfo.changePrice / state.eurInfo.basePrice) * 100).toFixed(
    2
  );
};
