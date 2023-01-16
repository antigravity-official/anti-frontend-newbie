import React, { Suspense, useEffect, useState } from "react";
import ExchangeContainer from "./components/exchange/ExchangeContainer";

export const App = () => {
  const [eurInfo, setEurInfo] = useState<any>({});

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  return (
    <div className="App">
      <Suspense
        fallback={
          <div>환율 정보를 가져오고 있습니다... 잠시만 기다려 주세요</div>
        }
      >
        <ExchangeContainer />
      </Suspense>
    </div>
  );
};

export default App;
