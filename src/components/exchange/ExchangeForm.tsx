import React, { ChangeEvent, useState } from "react";
import { getNumberToEur, removeComma } from "../../utils";

interface Props {
  exchangeEurToKrw: (number: number) => number;
}

const ExchangeForm: React.FC<Props> = ({ exchangeEurToKrw }) => {
  const [eur, setEur] = useState("0");

  const handleChangeEur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    const eur = getNumberToEur(value);
    if (eur) {
      setEur(eur);
    }
  };
  return (
    <>
      <input onChange={handleChangeEur} value={eur} maxLength={17} /> 유로 ▶︎{" "}
      <input
        disabled
        value={exchangeEurToKrw(Number(removeComma(eur)))}
        readOnly
      />{" "}
      원
    </>
  );
};
export default ExchangeForm;
