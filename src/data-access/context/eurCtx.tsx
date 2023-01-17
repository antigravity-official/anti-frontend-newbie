import { createContext, useContext, useState, useEffect } from "react";
import type { KrwEur } from "../../types/krweur";
import { getEurInfo } from "../../api";

interface State {
  eurInfo: KrwEur;
  isReady: boolean;
}

export const eurCtx = createContext<State>({
  eurInfo: {} as KrwEur,
  isReady: false,
});

const EurCtxProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<State>({
    eurInfo: {} as KrwEur,
    isReady: false,
  });

  useEffect(() => {
    fetchEurInfo();
  }, []);

  const fetchEurInfo = async () => {
    try {
      const krweur = await getEurInfo();
      if (krweur) setState({ eurInfo: krweur, isReady: true });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  return <eurCtx.Provider value={state}>{children}</eurCtx.Provider>;
};

export default EurCtxProvider;
export const useEurState = () => useContext(eurCtx);
