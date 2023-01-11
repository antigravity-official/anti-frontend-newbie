import React, { useEffect, useState } from "react";
import DisplayInfo from "./components/DisplayInfo";
import ExchangeInput from "./components/ExchangeInput";
import Loading from "./components/Loading";
import { ApiModel } from "./model/ApiModel";
import { MoneyInfo } from "./lib/types";
import { MoneyInfoModel } from "./model/ViewModel";

const apiModel = new ApiModel();
const moneyInfoModel = new MoneyInfoModel(apiModel);

export default function App() {
  const [eurInfo, setEurInfo] = useState<MoneyInfo | null>(null);

  useEffect(() => {
    const getEurInfo = async () => {
      try {
        const krweur = await moneyInfoModel.getMoneyInfo();

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
}
