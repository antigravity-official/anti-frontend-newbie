import React from "react";
import Spinner from "./components/Spinner";
import EurInfoView from "./view/EurInfoView";
import ExchangeView from "./view/ExchangeView";
import EurInfoViewModel from "./viewModel/EurInfoViewModel";

export const App = () => {
  const { isReady } = EurInfoViewModel();
  // view
  if (!isReady) return <Spinner />;

  return (
    <div className="App">
      <EurInfoView />
      <hr />
      <ExchangeView />
    </div>
  );
};

export default App;
