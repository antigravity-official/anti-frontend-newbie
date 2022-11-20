import React, { useEffect, useState } from "react";
import ChangeInputEur from "./components/ChangeInputEur";
import EurInfo from "./components/EurInfo";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>();

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    // return () => {};
  }, []);

  return (
    <>
      {isReady ? (
        <div>
          <EurInfo eurInfo={eurInfo} />
          <ChangeInputEur basePrice={eurInfo.basePrice} />
        </div>
      ) : (
        <div>잠시만 기다려 주세요.</div>
      )}
    </>
  );
};

export default App;
