import * as React from "react";
import InputViewModel from "../viewModel/inputViewModel";
import { tExchangInfoData } from "../_types/exchangeInfo";

export default function InputView({ eurInfo }: { eurInfo: tExchangInfoData }) {
  const { changeValue, onChangeInputValue } = InputViewModel(eurInfo);

  return (
    <>
      <input type="number" onChange={onChangeInputValue} /> 유로 ▶︎
      <input disabled value={changeValue} readOnly /> 원
    </>
  );
}
