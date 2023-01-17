import React, {  useState } from "react";

import { KrweurType, intialState, getEurInfo } from "./helper/get-euro-info";
import EuroToKrwController from "./view-models/Euro-to-krw";

export const App = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<KrweurType>(intialState);
  const [inputedEuro, setInputedEuro] = useState<number>(0);
  const [exchangedWon, setExchangedWon] = useState<number>(0);

  const getReadyState = (readyState: boolean) => {
    setReady(() => readyState);
  };
  const getEuroInfoState = (euroInfoState: KrweurType) => {
    setEurInfo(() => euroInfoState);
  };
  const getEuroInputState = (euroInputState: number) => {
    setInputedEuro(() => euroInputState);
  };
  const getExchangedWon = (exchangedWon: number) => {
    setExchangedWon(() => exchangedWon);
  };

  return (
    <div className="App">
      <EuroToKrwController
        getReadyState={getReadyState}
        getEuroInfoState={getEuroInfoState}
        getEuroInputState={getEuroInputState}
        getExchangedWon={getExchangedWon}
        isReady={isReady}
        eurInfo={eurInfo}
        inputedEuro={inputedEuro}
        exchangedWon={exchangedWon}
      />
    </div>
  );
};

export default App;
