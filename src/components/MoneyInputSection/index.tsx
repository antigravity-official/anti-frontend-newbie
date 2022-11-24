import React, { useCallback, useState } from "react";
import exchanger from "../../utils/exchanger";
import decimalPlaceController from "../../utils/decimalPlaceController";

interface PropsType {
  currencyName: string;
  basePrice: number;
}

const MoneyInputSection = ({ currencyName, basePrice }: PropsType) => {
  const [value, setValue] = useState("");
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(decimalPlaceController(e.target.value));
    },
    []
  );

  return (
    <>
      <input
        data-testid="foreignInput"
        type="number"
        value={value}
        onChange={onChangeInput}
      />{" "}
      {currencyName} ▶︎{" "}
      <input
        data-testid="wonInput"
        value={exchanger(+value, basePrice)}
        disabled
      />{" "}
      원
    </>
  );
};

export default MoneyInputSection;
