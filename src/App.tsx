import React from "react";
import ExchangeRate from "./Presentation/Views/ExchangeRate/View";
import { EUR, USD } from "./constants";

export const App = () => {
  return (
    <div className="App">
      <ExchangeRate currency={EUR} />
    </div>
  );
};

export default App;
