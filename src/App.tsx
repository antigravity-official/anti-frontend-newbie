import React from "react";
import ExchangeRate from "./Presentation/Views/ExchangeRate/View";
import { EUR, JPY, USD } from "./constants";

export const App = () => {
  return (
    <div className="App">
      <ExchangeRate currency={EUR} />
      {/*<ExchangeRate currency={USD} />*/}
      {/*<ExchangeRate currency={JPY} />*/}
    </div>
  );
};

export default App;
