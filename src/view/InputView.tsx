import * as React from "react";
import InputViewModel from "../viewModel/inputViewModel";
import { tExchangInfoData } from "../_types/exchangeInfo";

export default function InputView({ eurInfo }: { eurInfo: tExchangInfoData }) {
  const { eurValue, changeValue, onChangeInputValue } = InputViewModel(eurInfo);

  return (
    <>
      <input
        type="text"
        value={eurValue}
        onChange={onChangeInputValue}
      />
      유로 ▶︎
      <input disabled value={changeValue} readOnly /> 원
    </>
  );
}
