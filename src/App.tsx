import React from "react";
import EurInfoView from "./view/EurInfoView";
import ExchangeView from "./view/ExchangeView";
import EurInfoViewModel from "./viewModel/EurInfoViewModel";

export const App = () => {
  const { isReady } = EurInfoViewModel();
  // view
  if (!isReady) return <div>로딩중...</div>;

  return (
    <div className="App">
      <EurInfoView />
      <hr />
      <ExchangeView />
    </div>
  );
};

export default App;
