import React, { useEffect, useState } from "react";
import DisplayInfo from "./components/DisplayInfo";
import ExchangeInput from "./components/ExchangeInput";
import { ApiModel } from "./lib/api";
import { MoneyInfo } from "./lib/types";

export const App = () => {
  const [eurInfo, setEurInfo] = useState<MoneyInfo | null>(null);

  useEffect(() => {
    const getEurInfo = async () => {
      try {
        const krweur = await ApiModel.fetchEurInfo();

        setEurInfo(krweur);
      } catch (err) {
        console.error(err)
      }
    };

    getEurInfo();
  }, []);

  if (!eurInfo) {
    return null;
  }

  return (
    <div className="App">
      <DisplayInfo eurInfo={eurInfo} />
      <hr />
      <ExchangeInput basePrice={eurInfo.basePrice} />
    </div>
  );
};

export default App;
