import React, { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';
import { QueryKeys } from './lib/queryClient';
import EuroInfoApi from 'lib/apis/EuroInfoApi';
import CurrencyInput from 'components/CurrencyInput';
import ConvertCurrency from './lib/ConvertCurrency';
import Loading from 'components/Loading';
import Layout from 'components/Layout';
import DropDowns from 'components/DropDowns';
import useInput from './hooks/useInput';
import useConvert from './hooks/useConvert';

const trim = (amount: number, fraction?: number): number => {
  return Number(amount.toFixed(fraction || 0));
};

export const App = () => {
  const [isReady, setIsReady] = useState(false);
  const { data, isLoading } = useQuery(QueryKeys.EurInfo, () => EuroInfoApi.getKRW());

  const priceOptions = [
    { name: '기본', price: data?.basePrice },
    { name: '살때', price: data?.cashBuyingPrice },
    { name: '팔때', price: data?.cashSellingPrice },
    { name: '보낼때', price: data?.ttSellingPrice },
    { name: '받을때', price: data?.ttBuyingPrice },
  ];

  const [from, into, result, handleConvert, handleSwitch, handleCurrencyReset] = useConvert({
    from: {
      name: 'eur',
      unit: '유로',
      locale: 'en',
      getCurrency: (amount: number, price: number) => trim(ConvertCurrency.krwToEur(amount, price), 2),
    },
    into: {
      name: 'krw',
      unit: '원',
      locale: 'ko',
      getCurrency: (amount: number, price: number) => trim(ConvertCurrency.eurToKrw(amount, price)),
    },
  });
  const [amount, handleAmount, handleAmountReset] = useInput(1);
  const [index, setIndex] = useState(0);

  const onWhenChange = (e: ChangeEvent<HTMLSelectElement>) => setIndex(+e.target.value);

  const handleReset = () => {
    handleAmountReset();
    handleCurrencyReset();
  };

  const convertCurrency = () => {
    const price = priceOptions[index].price;

    handleConvert(amount, price);
    setIsReady(true);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <Layout>
        <p>유로 → 원</p>
        <div>환율기준 (1 유로)</div>
        <div>
          {data.basePrice}
          {data.basePrice - data.openingPrice > 0 && '▲'}
          {data.basePrice - data.openingPrice < 0 && '▼'}
          {data.changePrice}원 ({trim((data.changePrice / data.basePrice) * 100, 2)}%)
        </div>
        <hr />
        <div className="from">
          <h3>From</h3>
          <DropDowns label={'종류'} index={index} info={priceOptions} onChangeIndex={onWhenChange} />
          <br />
          <CurrencyInput label={from.name} amount={amount} onAmountChange={handleAmount} />
          <div>
            <button onClick={convertCurrency}>convert</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSwitch}>switch</button>
          </div>
        </div>
        {isReady && (
          <>
            <hr />
            <div className="to">
              <p>{result}</p>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export default App;
