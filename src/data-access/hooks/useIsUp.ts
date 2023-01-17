import { useEurState } from "./../context/eurCtx";

export const useIsUp = () => {
  const state = useEurState();
  if (!state) {
    throw Error("환율 정보 조회에 실패했습니다.");
  }
  return state.eurInfo.basePrice - state.eurInfo.openingPrice > 0;
};
