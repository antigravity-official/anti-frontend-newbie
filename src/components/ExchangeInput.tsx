import React, { useState } from "react";

export default function ExchangeInput({ basePrice }: { basePrice: number }) {
  const [krwValue, setKrwValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetInputValue = event.target.value;

    const [_, decimal] = targetInputValue.split(".");

    if (decimal?.length > 2) {
      return;
    }

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
      <input type="number" value={inputValue} onChange={handleOnChange} /> 유로
      ▶︎ <input value={krwValue} disabled /> 원
    </>
  );
}
