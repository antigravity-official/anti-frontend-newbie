import React, { useRef } from "react";

import { ExchangeRateInfoView } from "./view/ExchangeRateInfoView";
import { ExchangeRateInfoViewModel } from "./viewmodel/ExchangeRateInfoViewModel";
import { ExchangeRateInfoModel } from "./model/ExchangeRateInfoModel";
import { CurrencyConverterView } from "./view/CurrencyConverterView";
import { CurrencyConverterViewModel } from "./viewmodel/CurrencyConverterViewModel";
import { LoadingView } from "./view/LoadingView";
import { LoadingViewModel } from "./viewmodel/LoadingViewModel";

export const Provider = () => {
  const { current: exchangeRateInfoModel } = useRef(
    new ExchangeRateInfoModel()
  );
  const { eurInfo, exchangeEurToKrw } = ExchangeRateInfoViewModel(
    exchangeRateInfoModel
  );
  const { unformatCurrInput, onChange, currInput } =
    CurrencyConverterViewModel();

  const { isLoading, completeDataFetch } = LoadingViewModel();

  return (
    <>
      {isLoading ? (
        <LoadingView
          isDataFetched={completeDataFetch(
            exchangeRateInfoModel.getKrwEurData()
          )}
        ></LoadingView>
      ) : (
        <ExchangeRateInfoView euroInfo={eurInfo}></ExchangeRateInfoView>
      )}
      <CurrencyConverterView
        exchangeEurToKrw={exchangeEurToKrw}
        currInput={currInput}
        unformatCurrInput={unformatCurrInput}
        onChange={onChange}
      ></CurrencyConverterView>
    </>
  );
};
