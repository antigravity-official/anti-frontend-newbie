import React from "react";
import "./App.css";
import { ExchangProvider } from "./VM";
export const App: React.FC = () => {
  return (
    <div className="App">
      <ExchangProvider></ExchangProvider>
    </div>
  );
};

export default App;
