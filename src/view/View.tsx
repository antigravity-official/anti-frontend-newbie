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
  const [EuroInput, setEuroInput] = useState('1');

  useEffect(() => {
    (async () => {
      await viewModel.getEurInfo();
      setEurInfo(viewModel._euroInfo);
    })();
    setIsReady(true);
  }, []);

  const exchangeEurToKrw = (krw: string) => {
    if (!!eurInfo) {
      return Math.floor(Number(krw) * eurInfo.basePrice);
    }
  };

  const handleWriteEuro = (e: ChangeEvent<HTMLInputElement>) => {
    setEuroInput(viewModel.writeEuroInput(e.target.value, EuroInput));
  };

  return !isReady ? (
    <>
      <CircularProgress />
      <p>환율을 로딩 중입니다.</p>
    </>
  ) : (
    <div className='ViewModel'>
      <h1>유로 현재 환율</h1>
      <p>환율기준 (1 유로)</p>
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
          <table>
            <tbody>
              <tr>
                <th>살때</th>
                <td>{addComma(transformInt(eurInfo.cashBuyingPrice))}</td>
              </tr>
              <tr>
                <th>팔때</th>
                <td>{addComma(transformInt(eurInfo.cashSellingPrice))}</td>
              </tr>
              <tr>
                <th>보낼때</th>
                <td>{addComma(transformInt(eurInfo.ttSellingPrice))}</td>
              </tr>
              <tr>
                <th>받을때</th>
                <td>{addComma(transformInt(eurInfo.ttBuyingPrice))}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <hr />
      <input value={EuroInput} onChange={handleWriteEuro} /> 유로 ▶︎&nbsp;
      <input disabled value={addComma(exchangeEurToKrw(EuroInput))} /> 원
    </div>
  );
};

export default View;
