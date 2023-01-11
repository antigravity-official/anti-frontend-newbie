import React from "react";
import { exchangeEurToKrw } from "./hooks/exchangeEurToKrw";

const Exchange = ({ basePrice }: { basePrice: number }) => {
  const [inputEur, setInputEur] = React.useState<number>(0);
  const exchangeKrw = exchangeEurToKrw(inputEur, basePrice);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (/^\d*.?\d{0,2}$/.test(e.target.value)) {
      setInputEur(+e.target.value);
    } else {
      e.target.value = (+e.target.value).toFixed(2);
      setInputEur((pre) => +pre.toFixed(2));
    }
  };

  return (
    <>
      <input type="number" onChange={handleOnChange} /> 유로 ▶︎ {exchangeKrw} 원
    </>
  );
};

export default Exchange;
