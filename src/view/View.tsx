import { ChangeEvent, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import getFluctuationIcon from '../utils/getFluctuationIcon';
import ViewProps from '../types/ViewProps';
import ViewModelEuroInfo from '../types/ViewModelEuroInfo';

const View = ({ viewModel }: ViewProps) => {
  const [isReady, setIsReady] = useState(false);
  const [euroInfo, setEuroInfo] = useState<ViewModelEuroInfo | undefined>();
  const [EuroInput, setEuroInput] = useState('1');

  useEffect(() => {
    if (!!viewModel.euroInfo.basePrice) {
      setIsReady(true);
      setEuroInfo(viewModel.euroInfo);
    }
  }, [viewModel.euroInfo]);

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
      {!!euroInfo && (
        <>
          <p
            className={
              euroInfo.fluctuationPrice > 0
                ? 'up'
                : euroInfo.fluctuationPrice !== 0
                ? 'down'
                : ''
            }
          >
            {euroInfo.basePriceStr}
            {getFluctuationIcon(euroInfo)}
            {euroInfo.changePrice}원 ({euroInfo.changePercent}%)
          </p>
          <table>
            <tbody>
              <tr>
                <th>살때</th>
                <td>{euroInfo.cashBuyingPrice}</td>
              </tr>
              <tr>
                <th>팔때</th>
                <td>{euroInfo.cashSellingPrice}</td>
              </tr>
              <tr>
                <th>보낼때</th>
                <td>{euroInfo.ttSellingPrice}</td>
              </tr>
              <tr>
                <th>받을때</th>
                <td>{euroInfo.ttBuyingPrice}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <hr />
      <input value={EuroInput} onChange={handleWriteEuro} /> 유로 ▶︎&nbsp;
      <input disabled value={viewModel.exchangeEurToKrw(EuroInput, euroInfo)} />
      &nbsp;원
    </div>
  );
};

export default View;
