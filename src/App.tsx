import { ChangeEvent, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {
  getFluctuationIcon,
  addComma,
  transformInt,
} from './assets/utils/involvedInTexts';

export interface EuroInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfo | undefined>();
  const [inputEuro, setInputEuro] = useState('');

  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: string) => {
    if (!!!inputEuro) return '';
    if (!!eurInfo) {
      return Math.floor(Number(krw) * eurInfo.basePrice);
    }
  };

  const handleWriteEuro = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.includes('.')) {
      value = value.split('.')[0] + '.' + value.split('.')[1].slice(0, 2);
    }
    setInputEuro(value);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return !isReady ? (
    <>
      <CircularProgress />
      <p>환율을 로딩 중입니다.</p>
    </>
  ) : (
    <div className='App'>
      <h4>환율기준 (1 유로)</h4>
      {!!eurInfo && (
        <>
          <p
            className={
              eurInfo.basePrice - eurInfo.openingPrice > 0
                ? 'up'
                : eurInfo.basePrice - eurInfo.openingPrice != 0
                ? 'down'
                : ''
            }
          >
            {addComma(transformInt(eurInfo.basePrice))}
            {getFluctuationIcon(eurInfo)}
            {addComma(eurInfo.changePrice)}원 (
            {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
          </p>
          <ul>
            <li>살때 : {addComma(transformInt(eurInfo.cashBuyingPrice))}</li>
            <li>팔때 : {addComma(transformInt(eurInfo.cashSellingPrice))}</li>
            <li>보낼때 : {addComma(transformInt(eurInfo.ttSellingPrice))}</li>
            <li>받을때 : {addComma(transformInt(eurInfo.ttBuyingPrice))}</li>
          </ul>
        </>
      )}
      <hr />
      <input value={inputEuro} onChange={handleWriteEuro} /> 유로 ▶︎&nbsp;
      <input disabled value={addComma(exchangeEurToKrw(inputEuro))} /> 원
    </div>
  );
};

export default App;
