import { useContext } from "react";
import { eurCtx } from "./../context/eurCtx";

export const useIsUp = () => {
  const state = useContext(eurCtx);
  return state.eurInfo.basePrice - state.eurInfo.openingPrice > 0;
};
