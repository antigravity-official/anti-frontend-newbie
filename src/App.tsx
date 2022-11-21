import React from "react";
import { ExchangProvider } from "./models";
import { Home } from "./components/pages/Home";
import { Loading } from "./components/Common/Loading";

export const App: React.FC = () => {
  return (
    <div className="App">
      <ExchangProvider>
        <Home />
        <hr />
        <Loading />
      </ExchangProvider>
    </div>
  );
};

export default App;
