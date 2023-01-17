import { createContext, useContext, useState, useEffect } from "react";
import type { KrwEur } from "../../types/krweur";
import { getEurInfo } from "../../api/api";

interface State {
  eurInfo: KrwEur | null;
  isReady: boolean;
}

export const eurCtx = createContext<State>({
  eurInfo: null,
  isReady: false,
});

const EurCtxProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<State>({
    eurInfo: null,
    isReady: false,
  });

  useEffect(() => {
    try {
      fetchEurInfo();
      console.log("asdf");
    } catch (error) {
      console.error(error);
      alert("환율 정보 조회에 실패했습니다.");
    }
  }, []);

  const fetchEurInfo = async () => {
    const krweur = await getEurInfo();
    if (krweur) setState({ eurInfo: krweur, isReady: true });
    console.log(krweur);
  };

  return <eurCtx.Provider value={state}>{children}</eurCtx.Provider>;
};

export default EurCtxProvider;
export const useEurState = () => useContext(eurCtx);
