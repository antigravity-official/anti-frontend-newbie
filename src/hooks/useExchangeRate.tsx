import { useState } from "react";
import { ExchangeRateInfo, getExchangeRateInfo } from "../model/ExchangeRateInfo";

/**
 * 환율 정보 hook
 */

const useExchangeRate = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [exchageRateInfo, setExchageRateInfo] = useState<ExchangeRateInfo>(new ExchangeRateInfo());

  const loadExchangeRateInfo = (country: string) => {
    getExchangeRateInfo(country).then((result) => {
      setExchageRateInfo(result);
      setReady(true);
    });
  };

  return {
    isReady,
    exchageRateInfo,
    loadExchangeRateInfo,
  };
};

export default useExchangeRate;
