import { useState, useEffect, createContext } from "react";
import ExChangeTemplate from "../components/ExchangeTemplate";
import Loading from "../components/Loading";
import { eurInfo } from "../types/eurInfoTpye";

export const ApiContext = createContext<eurInfo>({});

export function ApiProvider() {
  const [data, setData] = useState<object>({});
  const [isReady, setReady] = useState(false);

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setData(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  return (
    <ApiContext.Provider value={data}>
      {isReady ? <ExChangeTemplate /> : <Loading />}
    </ApiContext.Provider>
  );
}
