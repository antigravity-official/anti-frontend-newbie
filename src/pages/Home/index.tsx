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
          <ExchangeInfoSection
            currencyName={info[0].currencyName}
            basePrice={info[0].basePrice}
            change={info[0].change}
            changePrice={info[0].changePrice}
            cashBuyingPrice={info[0].cashBuyingPrice}
            cashSellingPrice={info[0].cashSellingPrice}
            ttSellingPrice={info[0].ttSellingPrice}
            ttBuyingPrice={info[0].ttBuyingPrice}
          />
          <hr />
          <MoneyInputSection
            currencyName={info[0].currencyName}
            basePrice={info[0].basePrice}
          />
        </>
      ) : (
        <span>환율 정보를 가져오고 있습니다...</span>
      )}
    </div>
  );
};

export default Home;
