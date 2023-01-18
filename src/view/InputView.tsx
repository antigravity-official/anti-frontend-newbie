import * as React from "react";
import InputViewModel from "../viewModel/inputViewModel";

export default function InputView() {
  const { changeValue, onChangeInputValue } = InputViewModel();

  return (
    <>
      <input type="number" onChange={onChangeInputValue} /> 유로 ▶︎{" "}
      <input disabled value={changeValue} readOnly /> 원
    </>
  );
}
