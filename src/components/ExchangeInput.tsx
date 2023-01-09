import React, { useState } from "react";

export default function ExchangeInput({ basePrice }: { basePrice: number }) {
  const [inputValue, setInputValue] = useState(0);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const exchangeEurToKrw = (krw: number) => krw * basePrice;
    const krw = exchangeEurToKrw(Number(event.target.value));

    setInputValue(krw);
  };

  return (
    <>
      <input type="number" onChange={handleOnChange} /> 유로 ▶︎{" "}
      <input value={inputValue} disabled /> 원
    </>
  );
}
