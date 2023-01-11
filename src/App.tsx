import React, { useState, useEffect } from "react";

import "./Styles/App.css";

import Exchange from "./view/Exchange";
import Loading from "./view/Loading";

export const App = () => {
  const [isReady, setReady] = useState<Boolean>(false);
  const [eurInfo, setEurInfo] = useState<any>({});

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
  }, []);

  return (
    <div className="App">
      {isReady ? <Exchange props={eurInfo} /> : <Loading />}
    </div>
  );
};

export default App;
