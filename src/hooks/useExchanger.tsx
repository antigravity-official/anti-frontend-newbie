import { useState } from "react";
import { getFormattedNumber, removeCommaFromString } from "../utils/Util";

const useExchanger = () => {
  const [input, setInput] = useState<string>("0");
  const [result, setResult] = useState<string>("0");

  const exchangeToKrw = (inputPrice: string, basePrice: number) => {
    const removeComma = removeCommaFromString(inputPrice);
    const inputPriceToNumber = Number(removeComma);
    setInput(getFormattedNumber(inputPriceToNumber, 2));

    const krw = inputPriceToNumber * basePrice;
    setResult(getFormattedNumber(krw, 0));
  };

  return {
    input,
    result,
    exchangeToKrw,
  };
};

export default useExchanger;
