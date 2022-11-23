import React, { useState } from 'react';
import { getEurInfo } from './apis';
import { useQuery } from 'react-query';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';

export const App = () => {
  const { data, isLoading, error } = useQuery('v1/forex', getEurInfo);

  const [krw, setKrw] = useState(0);
  const [eur, setEur] = useState<string>();

  const exchangeEurToKrw = (krw: number) => Math.floor(krw * data!.basePrice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let regexp = /^\d*.?\d{0,2}$/;
    if (!regexp.test(e.target.value)) {
      return;
    } else {
      setEur(e.target.value);
    }
    setKrw(exchangeEurToKrw(Number(e.target.value)));
  };

  if (isLoading)
    return <div>{<LoadingIcon strokeWidth='45' width='80' />}</div>;
  return (
    <>
      {' '}
      {!isLoading && (
        <div className='App'>
          <div>환율기준 (1 유로)</div>
          <div>
            {data.basePrice}
            {data.basePrice - data.openingPrice > 0 && '▲'}
            {data.basePrice - data.openingPrice < 0 && '▼'}
            {data.changePrice}원 ({(data.changePrice / data.basePrice) * 100}%)
          </div>
          <div>
            <div>살때 : {data.cashBuyingPrice}</div>
            <div>팔때 : {data.cashSellingPrice}</div>
            <div>보낼때 : {data.ttSellingPrice}</div>
            <div>받을때 : {data.ttBuyingPrice}</div>
          </div>
          <hr />
          <input onChange={handleChange} value={eur || ''} /> 유로 ▶︎{' '}
          <input
            value={krw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            disabled
          />
        </div>
      )}
    </>
  );
};

export default App;
