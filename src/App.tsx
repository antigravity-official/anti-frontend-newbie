import React, { useEffect, useState } from "react";
import ExchangeInfoView from "./view/ExchangeInfoView";
import InputView from "./view/InputView";

export const App = () => {
  const [isReady, setReady] = useState(false);

  return (
    <div className="App">
      <ExchangeInfoView />
      <hr />
      <InputView />
    </div>
  );
};

export default App;
