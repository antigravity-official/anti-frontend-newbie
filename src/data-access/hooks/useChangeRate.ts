import { useEurState } from "../context/eurCtx";

export const useChangeRate = () => {
  const state = useEurState();
  if (Object.keys(state).length === 0) {
    throw new Error("환율 정보 요청에 실패했습니다. 관리자에게 문의하세요.");
  }

  return ((state.eurInfo.changePrice / state.eurInfo.basePrice) * 100).toFixed(
    2
  );
};
