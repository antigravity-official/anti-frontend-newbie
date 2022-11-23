import React, { useState } from "react";
import ExchangeInfoSection from "../../components/ExchangeInfoSection";
import MoneyInputSection from "../../components/MoneyInputSection";
import { useGetExchangeInfoByCodeQuery } from "../../apis/exchange/ExchangeApi.query";

const Home = () => {
  const [code, setCode] = useState("FRX.KRWEUR");
  const { data: info, isSuccess } = useGetExchangeInfoByCodeQuery(code);
  return (
    <div className="App">
      {isSuccess ? (
        <>
          <ExchangeInfoSection info={info[0]} />
          <hr />
          <MoneyInputSection info={info[0]} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
