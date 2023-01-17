import { useContext } from "react";
import { eurCtx } from "./../context/eurCtx";
export const useIsReady = () => {
  const state = useContext(eurCtx);
  return state.isReady;
};
