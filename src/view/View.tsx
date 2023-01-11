import { ChangeEvent, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import transformInt from '../utils/transformInt';
import getFluctuationIcon from '../utils/getFluctuationIcon';
import addComma from '../utils/addComma';
import ViewProps from '../types/ViewProps';
import EuroInfoTypes from '../types/EuroInfoTypes';

const View = ({ viewModel }: ViewProps) => {
  const [isReady, setIsReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfoTypes | undefined>();
  const [inputEuro, setInputEuro] = useState('');

  useEffect(() => {
    (async () => {
      await viewModel.getEurInfo();
      setEurInfo(viewModel._euroInfo);
    })();
    setIsReady(true);
  }, []);

  const exchangeEurToKrw = (krw: string) => {
    if (!!!inputEuro) return '';
    if (!!eurInfo) {
      return Math.floor(Number(krw) * eurInfo.basePrice);
    }
  };

  const handleWriteEuro = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const regex = /^[0-9.]*$/;
    if (!regex.test(e.target.value)) return setInputEuro((prev) => prev);
    if (value.includes('.')) {
      value = value.split('.')[0] + '.' + value.split('.')[1].slice(0, 2);
    }
    setInputEuro(value);
  };

  return !isReady ? (
    <>
      <CircularProgress />
      <p>환율을 로딩 중입니다.</p>
    </>
  ) : (
    <div className='ViewModel'>
      <h4>환율기준 (1 유로)</h4>
      {!!eurInfo && (
        <>
          <p
            className={
              eurInfo.basePrice - eurInfo.openingPrice > 0
                ? 'up'
                : eurInfo.basePrice - eurInfo.openingPrice !== 0
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

export default View;
