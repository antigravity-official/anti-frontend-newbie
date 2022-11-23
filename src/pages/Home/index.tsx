import React, { useState } from "react";
import ExchangeInfoSection from "../../components/ExchangeInfoSection";
import MoneyInputSection from "../../components/MoneyInputSection";
import { useGetExchangeInfoByCodeQuery } from "../../apis/exchange/ExchangeApi.query";

const Home = () => {
  const [code, setCode] = useState("FRX.KRWEUR");
  const { isLoading } = useGetExchangeInfoByCodeQuery(code);
  return (
    <div className="App">
      {isLoading ? (
        <>
          <ExchangeInfoSection code={code} />
          <hr />
          <MoneyInputSection code={code} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
