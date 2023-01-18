import React, { useState } from "react";
import { KR_DECIMAL } from "../utils/constant";
import { exchangeEurToKrw, isNumberHundredths, priceToLocaleString } from "../utils/util";
import CurrencyConverterUI from "../view/CurrencyConvertUI";

const CurrencyConverter = ({ basePrice }: { basePrice: number }) => {
  const [eur, setEur] = useState("");
  const [kr, setKr] = useState("");

  const onInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const eurInput = e.target.value;
    const numberValidate = isNumberHundredths(Number(eurInput));
    if (!numberValidate) return alert("소수점 둘째까지만 입력해주세요");

    const eurPrice = eurInput.toString();
    const krPrice = exchangeEurToKrw(Number(eurInput), basePrice).toFixed(KR_DECIMAL);
    setEur(eurPrice);
    setKr(krPrice);
  };

  return <CurrencyConverterUI eur={eur} kr={priceToLocaleString(Number(kr))} onInput={onInput} />;
};

export default CurrencyConverter;
