import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

import { EuroInfo } from "./types/type";
import { ExchangeRateInfoView } from "./components/ExchangeRateInfoView";
import { ExchangeRateInfoViewModel } from "./viewmodel/ExchangeRateInfoViewModel";
import { ExchangeRateInfoModel } from "./model/ExchangeRateInfoModel";

export const App = () => {
  const euroInfo = ExchangeRateInfoViewModel(new ExchangeRateInfoModel());
  // useEffect(() => {
  //   getEurInfo();
  //   return () => {};
  // }, []);

  // if (!isReady) return null;
  return (
    <div className="App">
      <ExchangeRateInfoView euroInfo={euroInfo}></ExchangeRateInfoView>
    </div>
  );
};

export default App;
