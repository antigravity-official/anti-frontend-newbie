import React, { ChangeEvent } from "react";

interface Props {
  money: string | undefined;
  exchangedMoney: string | undefined;
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
  currencyName: string | undefined;
  inputError: string | undefined;
}

const ExchangeInput = ({
  money,
  onChange,
  exchangedMoney,
  currencyName,
  inputError,
}: Props) => {
  return (
    <>
      <hr />
      <div>
        <input type="text" value={money} onChange={onChange} />
        {currencyName} ▶︎ <input value={exchangedMoney} disabled /> 원
      </div>
      {inputError && <div style={{ color: "orange" }}>{inputError}</div>}
    </>
  );
};

export default ExchangeInput;
