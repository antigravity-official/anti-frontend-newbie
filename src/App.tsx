import React, { useEffect, useState } from "react";
import { getEurInfo } from './api/exchange';
import { ExchangeInfo } from './model/Model';
import { ExchangeInput } from './view/component/inputPage/ExchangeInput';
import { ExchangeTotalInfo } from './view/component/Info/ExchangeTotalInfo';


export const App = () => {
  const [eurInfo, setEurInfo] = useState<ExchangeInfo | undefined>(undefined);

  useEffect(() => {
    getEurInfo().then((priceValue) => { setEurInfo(priceValue) });
    return () => {}
  }, []);

  
  if (!eurInfo) return null;
  return (
    <div className="App">
      <ExchangeTotalInfo eurInfo={eurInfo}/>
      <hr />
      <ExchangeInput eurInfo={eurInfo}/>
    </div>
  );
};

export default App;
