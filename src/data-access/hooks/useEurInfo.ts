import { eurCtx } from "./../context/eurCtx";
import { useContext } from "react";

export const useEurInfo = () => {
  const state = useContext(eurCtx);
  return state.eurInfo;
};
