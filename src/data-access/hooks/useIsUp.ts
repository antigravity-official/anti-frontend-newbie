import { useEurState } from "./../context/eurCtx";

export const useIsUp = () => {
  const { eurInfo } = useEurState();
  if (!eurInfo) {
    throw Error("환율 정보 조회에 실패했습니다.");
  }
  return eurInfo?.basePrice - eurInfo?.openingPrice > 0;
};
