import * as React from "react";
import ExchangeInfoViewModel from "../viewModel/ExchangeInfoViewModel";
import ExchangeInfoView from "./ExchangeInfoView";
import InputView from "./InputView";
import LodingView from "./LodingView";

export default function ExchangeRatePage() {
  const { isReady } = ExchangeInfoViewModel();

  return (
    <>
      <div className="App">
        {isReady ? (
          <>
            <ExchangeInfoView />
            <hr />
            <InputView />
          </>
        ) : (
          <LodingView />
        )}
      </div>
    </>
  );
}
