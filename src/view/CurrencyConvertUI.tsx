import React from "react";

const CurrencyConverterUI = ({
  eur,
  kr,
  onInput,
}: {
  eur: string;
  kr: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <hr />
      <input value={eur} onInput={onInput} /> 유로 ▶︎ <input value={kr} disabled /> 원
    </div>
  );
};

export default CurrencyConverterUI;
