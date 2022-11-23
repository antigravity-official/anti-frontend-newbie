import React, { useEffect, useState } from "react";
import { GetEurInfoReturnType } from "../../../types";
import getEurInfo from "../../apis/getEurInfo";
import ExchangeInfoSection from "../../components/ExchangeInfoSection";
import MoneyInputSection from "../../components/MoneyInputSection";

const Home = () => {
  const [exchangeInfo, setExchangeInfo] = useState<GetEurInfoReturnType>();

  useEffect(() => {
    getEurInfo().then((data) => {
      setExchangeInfo(data);
    });
  }, []);

  return (
    <div className="App">
      {exchangeInfo ? (
        <>
          <ExchangeInfoSection info={exchangeInfo} />
          <hr />
          <MoneyInputSection
            currency={exchangeInfo.currencyName}
            ratio={exchangeInfo.changeRate}
          />
        </>
      ) : null}
    </div>
  );
};

export default Home;
