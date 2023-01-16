import { createContext, useContext, useState, useEffect } from "react";
import { KrwEur } from "./../types/krweur";
import { getEurInfo } from "../api/api";

interface State {
  eurInfo: KrwEur | null;
  isReady: boolean;
}

const eurCtx = createContext<State>({
  eurInfo: null,
  isReady: false,
});

const EurCtxProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<State>({
    eurInfo: null,
    isReady: false,
  });

  useEffect(() => {
    (async () => {
      const krweur = await getEurInfo();
      if (krweur) setState({ eurInfo: krweur, isReady: true });
    })();
  }, []);

  return <eurCtx.Provider value={state}>{children}</eurCtx.Provider>;
};

export default EurCtxProvider;
export const useEurState = () => useContext(eurCtx);
