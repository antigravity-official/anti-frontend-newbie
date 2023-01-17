import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "../apis/common";
import { getEurInfo } from "../apis/forex";
import { EurInfo } from "../model/eurInfo";

const useExchangeController = () => {
  const [eurInfo, setEurInfo] = useState<EurInfo>();
  const [isLoading, setIsLoading] = useState(false);

  const getEurInfoAction = async () => {
    setIsLoading(true);
    try {
      const data = await getEurInfo();
      setEurInfo(data);
    } catch (e) {
      const error = e as unknown as AxiosError;
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const exchangeEurToKrw = (eur: number) => {
    if (eurInfo?.basePrice) {
      return Math.floor(eur * eurInfo.basePrice);
    }
    return 0;
  };

  useEffect(() => {
    getEurInfoAction();
    return () => {};
  }, []);

  return { eurInfo, exchangeEurToKrw, isLoading };
};
export default useExchangeController;
