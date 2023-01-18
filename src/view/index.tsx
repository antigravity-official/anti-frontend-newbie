import * as React from "react";
import ExchangeInfoViewModel from "../viewModel/ExchangeInfoViewModel";
import ExchangeInfoView from "./ExchangeInfoView";
import InputView from "./InputView";
import LodingView from "./LodingView";

export default function ExchangeRatePage() {
  const { isReady, eurInfo } = ExchangeInfoViewModel();

  return (
    <>
      <div className="App">
        {isReady ? (
          <>
            <ExchangeInfoView eurInfo={eurInfo} />
            <hr />
            <InputView eurInfo={eurInfo} />
          </>
        ) : (
          <LodingView />
        )}
      </div>
    </>
  );
}
