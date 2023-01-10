import React, { useEffect, useState } from "react";
import { getEurInfo } from '../../../api/exchange';
import { ExchangeInfo } from '../../../model/Model';
import { ExchangeInput } from '../inputPage/ExchangeInput';
import { ExchangeTotalInfo } from '../Info/ExchangeTotalInfo';
import { GlobalStyle } from '../../../styles/Main/GlobalStyle';
import { BoxStyle } from '../../../styles/Main/BoxStyle';

export const App = () => {
  const [eurInfo, setEurInfo] = useState<ExchangeInfo | undefined>(undefined);

  useEffect(() => {
    getEurInfo().then((priceValue) => { setEurInfo(priceValue) });
  }, []);

  if (!eurInfo) return null;

  return (
    <>
    <GlobalStyle />
      <BoxStyle>
          <ExchangeTotalInfo eurInfo={eurInfo}/>
          <hr />
          <ExchangeInput eurInfo={eurInfo}/>
      </BoxStyle>
    </>
  );
};

export default App;
