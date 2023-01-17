import { useContext } from "react";
import { eurCtx, useEurState } from "../context/eurCtx";

export const useEurInfo = () => {
  const state = useContext(eurCtx);
  if (!state) {
    throw Error("환율 정보 조회에 실패했습니다.");
  }
  return state.eurInfo;
};
