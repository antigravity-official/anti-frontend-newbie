import React from "react";
import ExchangeRate from "./components/ExchangeRate";
import { EUR, USD } from "./constants";

export const App = () => {
  return (
    <div className="App">
      <ExchangeRate currency={EUR} />
    </div>
  );
};

export default App;
