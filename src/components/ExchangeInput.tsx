import React, { useState } from "react";

export default function ExchangeInput({ basePrice }: { basePrice: number }) {
  const [krwValue, setKrwValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [value, decimal] = event.target.value.split(".");

    const targetInputValue = decimal
      ? `${value}.${decimal.slice(0, 2)}`
      : value;

    const exchangeEurToKrw = (krw: number) => krw * basePrice;
    const krw = exchangeEurToKrw(Number(targetInputValue));
    const { format } = new Intl.NumberFormat("ko", {
      maximumFractionDigits: 0,
    });

    setKrwValue(format(krw));
    setInputValue(targetInputValue);
  };

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={handleOnChange}
        data-testid="userInput"
      />{" "}
      유로 ▶︎ <input value={krwValue} data-testid="krwInput" disabled /> 원
    </>
  );
}
