import React, { useEffect, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import BasicCard from './components/BasicCard';
import InputCard from './components/InputCard';
import CircleCard from './components/CircleCard';
import ChartCard from './components/ChartCard';
import DataCard from './components/DataCard';
import Timer from './components/Timer';

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [eurInputValue, setEurInputValue] = useState('0');

  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  const onChangeEurInput = (e: any) => {
    const userInputValue = e.target.value.split('.');
    const commaEveryThreeDigits = userInputValue.map(
      (number: string, idx: number) => {
        if (idx === 0) {
          return Number(number.replace(/[^0-9]/g, '')).toLocaleString();
        }
        if (idx === 1) {
          return number.slice(0, 2);
        }
      }
    );

    setEurInputValue(commaEveryThreeDigits.join('.'));
  };

  const krwInput = () => {
    const notComma = eurInputValue.split(',').join('');
    return Math.trunc(exchangeEurToKrw(notComma)).toLocaleString();
  };

  if (!isReady) return null;
  return (
    <div className="App">
      <section style={{ display: 'flex', gap: '0.75rem' }}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <section style={{ display: 'flex', gap: '0.75rem' }}>
            <BasicCard width={16} height={5}>
              <div style={{ marginLeft: '1.25rem' }}>
                <p style={{ fontSize: '1.5rem', fontWeight: 900 }}>EUR ▶ KWR</p>
                <Timer />
              </div>
            </BasicCard>
            <BasicCard width={5} height={5}>
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '5rem',
                  height: '5rem',
                  fontSize: '2rem',
                }}
              >
                <MdRefresh />
              </p>
            </BasicCard>
          </section>
          <section style={{ display: 'flex', gap: '0.75rem' }}>
            <DataCard
              stateOne={'살 때'}
              stateTwo={'팔 때'}
              priceOne={eurInfo.cashBuyingPrice}
              priceTwo={eurInfo.cashSellingPrice}
            />
            <DataCard
              stateOne={'보낼 때'}
              stateTwo={'받을 때'}
              priceOne={eurInfo.cashBuyingPrice}
              priceTwo={eurInfo.cashSellingPrice}
            />
          </section>
          <InputCard width={21.8} height={8.75}>
            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '0.625rem' }}>국기</p>
              <p>나라이름</p>
            </div>
            <em>(EUR)</em>
          </InputCard>
        </section>
        <section style={{ alignSelf: 'end', marginBottom: '2.5rem' }}>
          <CircleCard />
        </section>

        <section
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <ChartCard
            basePrice={eurInfo.basePrice}
            openingPrice={eurInfo.openingPrice}
            changePrice={eurInfo.changePrice}
          />
          <InputCard width={21.8} height={8.75}>
            <div style={{ display: 'flex' }}>
              <p style={{ marginRight: '0.625rem' }}>국기</p>
              <p>나라이름</p>
            </div>
            <em>(KRW)</em>
          </InputCard>
        </section>
      </section>
      <input value={eurInputValue} onChange={onChangeEurInput} />
      <input value={krwInput()} disabled /> 원
    </div>
  );
};

export default App;
