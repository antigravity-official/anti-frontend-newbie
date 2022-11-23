import React, { useEffect, useState } from "react";
import { GetEurInfoReturnType } from "../../../types";
import getEurInfo from "../../apis/getEurInfo";
import ExchangeInfoSection from "../../components/ExchangeInfoSection";

const Home = () => {
  const [isReady, setReady] = useState(false);
  const [exchangeInfo, setExchangeInfo] = useState<GetEurInfoReturnType>();

  useEffect(() => {
    getEurInfo().then((data) => {
      setExchangeInfo(data);
      setReady(true);
    });
  }, []);

  if (!isReady) return null;

  return (
    <div className="App">
      {exchangeInfo ? <ExchangeInfoSection info={exchangeInfo} /> : null}
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </div>
  );
};

export default Home;
