import React, { useEffect, useState } from "react";
import DisplayInfo from "./components/DisplayInfo";
import ExchangeInput from "./components/ExchangeInput";
import Loading from "./components/Loading";
import { ApiModel } from "./lib/ApiModel";
import { MoneyInfo } from "./lib/types";

export const App = () => {
  const [eurInfo, setEurInfo] = useState<MoneyInfo | null>(null);

  useEffect(() => {
    const getEurInfo = async () => {
      try {
        const krweur = await ApiModel.fetchEurInfo();

        setEurInfo(krweur);
      } catch (err) {
        console.error(err);
      }
    };

    getEurInfo();
  }, []);

  return (
    <div className="App">
      {!eurInfo ? (
        <Loading />
      ) : (
        <>
          <DisplayInfo eurInfo={eurInfo} />
          <hr />
          <ExchangeInput basePrice={eurInfo.basePrice} />
        </>
      )}
    </div>
  );
};

export default App;
