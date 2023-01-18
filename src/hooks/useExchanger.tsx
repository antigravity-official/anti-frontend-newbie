import { useState } from "react";

const useExchanger = () => {
  const [result, setResult] = useState<number>(0);

  const exchangeToKrw = (inputPrice: number, basePrice: number) => {
    const krw = inputPrice * basePrice;
    setResult(krw);
  };

  return {
    result,
    exchangeToKrw,
  };
};

export default useExchanger;
