import React, { useEffect } from "react";
import { ExchangeViewModel } from "../vms";

const ExchangeView = ()  => {
  const { eur, krw, handleOnChange, updateEurInfo } = ExchangeViewModel();

  useEffect(() => {
    updateEurInfo();
  }, []);

  return (
    <>
      <input
        type="number"
        step="0.01"
        value={eur}
        onChange={handleOnChange}
      /> 유로 ▶︎
      <input
        disabled
        value={krw}
      /> 원
    </>
  );
};

export default ExchangeView;
