import React, { useEffect, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import BasicCard from './components/BasicCard';
import InputCard from './components/InputCard';
import CircleCard from './components/CircleCard';
import ChartCard from './components/ChartCard';
import DataCard from './components/DataCard';
import Timer from './components/Timer';
import CountryInfo from './components/CountryInfo';
import europe from './asset/europe.png';
import korea from './asset/korea.png';

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
            <CountryInfo
              flag={<img src={europe} alt="유럽연합 국기" />}
              CountryKor={'유럽연합'}
              CountryEng={'(EUR)'}
            />
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
            <CountryInfo
              flag={<img src={korea} alt="대한민국 국기" />}
              CountryKor={'대한민국'}
              CountryEng={'(KRW)'}
            />
          </InputCard>
        </section>
      </section>
      <input value={eurInputValue} onChange={onChangeEurInput} />
      <input value={krwInput()} disabled /> 원
    </div>
  );
};

export default App;
