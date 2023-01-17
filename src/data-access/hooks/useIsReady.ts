import { useEurState } from "./../context/eurCtx";
export const useIsReady = () => {
  const { isReady } = useEurState();
  return isReady;
};
