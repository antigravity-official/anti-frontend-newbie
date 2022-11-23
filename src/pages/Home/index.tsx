import React, { useEffect, useState } from "react";
import { GetEurInfoReturnType } from "../../../types";
import getEurInfo from "../../apis/getEurInfo";
import ExchangeInfoSection from "../../components/ExchangeInfoSection";

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
          <input /> 유로 ▶︎ <input disabled /> 원
        </>
      ) : null}
    </div>
  );
};

export default Home;
