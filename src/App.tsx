import React, { useState } from "react";
import ChangeInputEur from "./components/ChangeInputEur";
import EurInfo from "./components/EurInfo";
import useFetch from "./hooks/useFetch";

export const App = () => {
  const [isReady, setReady] = useState<boolean>(false);

  const eurInfos = useFetch(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR",
    setReady
  );

  return (
    <>
      {isReady ? (
        <div>
          <EurInfo eurInfo={eurInfos} />
          <ChangeInputEur basePrice={eurInfos.basePrice} />
        </div>
      ) : (
        <div>잠시만 기다려 주세요.</div>
      )}
    </>
  );
};

export default App;
