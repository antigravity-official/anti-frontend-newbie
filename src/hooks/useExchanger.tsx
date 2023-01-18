import { useState } from "react";
import { ExchangeRateInfo } from "../model/ExchangeRateInfo";

const useExchanger = () => {
  const [result, setResult] = useState<number>(0);

  const exchangeToKrw = (inputPrice: number, exchageRateInfo: ExchangeRateInfo) => {
    const krw = inputPrice * exchageRateInfo.basePrice;
    setResult(krw);
  };

  return {
    result,
    exchangeToKrw,
  };
};

export default useExchanger;
