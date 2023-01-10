import React, { useEffect, useState } from "react";
import { getEurInfo } from '../../../api/exchange';
import { ExchangeInfo } from '../../../model/Model';
import { ExchangeInput } from '../inputPage/ExchangeInput';
import { ExchangeCurrentInfo } from '../Info/ExchangeCurrentInfo';
import { GlobalStyle } from '../../../styles/Main/GlobalStyle';
import { BoxStyle } from '../../../styles/Main/BoxStyle';
import {FcCurrencyExchange} from 'react-icons/fc';

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
          <FcCurrencyExchange style={{fontSize:'120px'}}/>
          <h2>Exchange Rate Calculator</h2>
          <ExchangeCurrentInfo eurInfo={eurInfo}/>
          <hr />
          <ExchangeInput eurInfo={eurInfo}/>
      </BoxStyle>
    </>
  );
};

export default App;
