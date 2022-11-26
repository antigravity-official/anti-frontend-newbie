import { useEffect, useState } from 'react';

import getEurInfo from '../api/getEurInfo';
import { EurInfo } from '../types/EurInfo.types';

import styled from '@emotion/styled';

const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurInfo | null>(null);

  // const getEurInfo = async () => {
  //   const krweur = await fetch(
  //     'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
  //   )
  //     .then((response) => response.json())
  //     .then((array) => array[0]);

  //   setEurInfo(krweur);
  //   setReady(true);
  // };

  // const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  useEffect(() => {
    getEurInfo();
    // return () => {};
  }, []);

  // if (!isReady) return null;

  return (
    <AppContainer>
      <div>환율기준 (1 유로)</div>
      <div>
        {/* {eurInfo.basePrice} */}
        {/* {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%) */}
      </div>
      <div>
        {/* <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div> */}
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 31rem;
  height: 100vh;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
`;
