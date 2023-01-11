import React, { useEffect, useState } from "react";
import EurToKrw from './components/EurToKrw';
import ExchangeRate from './components/ExchangeRate';
import Margin from './components/Margin';
import Loading from './components/Loading';
import euroService from './services/euros';


export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState({});
  const [krw, setKrw] = useState(0);

  const exchangeEurToKrw = (event) => setKrw(event.target.value * eurInfo.basePrice);

  function commify(n) {
    const parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}

  useEffect(() => {
      euroService.getEurInfo().then(krweur => {
        setEurInfo(krweur);
        setReady(true);
      })
  }, []);

  if (!isReady) return <Loading />
  return (
    <div>
      <div>환율기준 (1 유로)</div>
      <ExchangeRate eurInfo={eurInfo} commify={commify} />
      <Margin eurInfo={eurInfo} commify={commify} />
      <hr />
      <EurToKrw exchangeEurToKrw={exchangeEurToKrw} krw={krw} commify={commify} />
    </div>
  );
};

export default App;