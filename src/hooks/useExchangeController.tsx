import { useEffect, useState } from "react";
import api from "../apis/common";
import { EurInfo } from "../model/eurInfo";

const useExchangeController = () => {
  const [eurInfo, setEurInfo] = useState<EurInfo>();
  const [isLoading, setIsLoading] = useState(false);

  const getEurInfo = async () => {
    setIsLoading(true);
    const { data } = await api<EurInfo[]>("v1/forex/recent?codes=FRX.KRWEUR");
    setEurInfo(data[0]);
    setIsLoading(false);
  };

  const exchangeEurToKrw = (eur: number) => {
    if (eurInfo?.basePrice) {
      return eur * eurInfo.basePrice;
    }
    return 0;
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return { eurInfo, exchangeEurToKrw, isLoading };
};
export default useExchangeController;
