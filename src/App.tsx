import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdRefresh } from 'react-icons/md';

// components file
import BasicCard from './components/BasicCard';
import InputCard from './components/InputCard';
import CircleCard from './components/CircleCard';
import ChartCard from './components/ChartCard';
import DataCard from './components/DataCard';
import Timer from './components/Timer';
import CountryInfo from './components/CountryInfo';

// img file
import europe from './asset/europe.png';
import korea from './asset/korea.png';

const ElemAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultMargin = styled.div`
  margin-left: 1.25rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const IconWrap = styled(ElemAlignCenter)`
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
`;

const FlexVerticalAlign = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FlexHorizontalAlign = styled.section`
  display: flex;
  gap: 0.75rem;
`;

const Input = styled.input`
  width: 19.5rem;
  height: 2.15rem;
  position: absolute;
  top: 2.95rem;
  right: 0;
  text-align: right;
  background-color: transparent;
  color: #e7e7ea;
  border: none;
  font-size: 1.5rem;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

const MoneyUnit = styled.p`
  width: 19.3rem;
  position: absolute;
  bottom: -4.8rem;
  right: 0.15rem;
  text-align: right;
  font-size: 0.75rem;
  color: #b9bac1;
  z-index: 1;
`;

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

  const onClickRefresh = (e: any) => {
    window.location.reload();
  };

  const krwInput = () => {
    const notComma = eurInputValue.split(',').join('');
    return Math.trunc(exchangeEurToKrw(notComma)).toLocaleString();
  };

  if (!isReady) return null;
  return (
    <>
      <FlexHorizontalAlign style={{ display: 'flex', gap: '0.75rem' }}>
        {/* left box */}
        <FlexVerticalAlign>
          <FlexHorizontalAlign>
            <BasicCard width={16} height={5}>
              <DefaultMargin>
                <Title>EUR ▶ KWR</Title>
                <Timer />
              </DefaultMargin>
            </BasicCard>
            <BasicCard width={5} height={5}>
              <IconWrap>
                <MdRefresh
                  onClick={onClickRefresh}
                  style={{ cursor: 'pointer' }}
                />
              </IconWrap>
            </BasicCard>
          </FlexHorizontalAlign>
          <FlexHorizontalAlign>
            <DataCard
              stateOne={'살 때'}
              stateTwo={'팔 때'}
              priceOne={eurInfo.cashBuyingPrice}
              priceTwo={eurInfo.cashSellingPrice}
            />
            <DataCard
              stateOne={'보낼 때'}
              stateTwo={'받을 때'}
              priceOne={eurInfo.ttSellingPrice}
              priceTwo={eurInfo.ttBuyingPrice}
            />
          </FlexHorizontalAlign>
          <InputCard width={21.8} height={8.75}>
            <CountryInfo
              flag={<img src={europe} alt="유럽연합 국기" />}
              CountryKor={'유럽연합'}
              CountryEng={'(EUR)'}
            />
            <Input
              value={eurInputValue}
              onChange={onChangeEurInput}
              maxLength={20}
            ></Input>
            <MoneyUnit>{eurInputValue}유로</MoneyUnit>
          </InputCard>
        </FlexVerticalAlign>

        {/* circle */}
        <section style={{ alignSelf: 'end', marginBottom: '2.5rem' }}>
          <CircleCard />
        </section>

        {/* right box */}
        <FlexVerticalAlign>
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
            <Input value={krwInput()} disabled></Input>
            <MoneyUnit style={{ color: '#55FED8' }}>{krwInput()}원</MoneyUnit>
          </InputCard>
        </FlexVerticalAlign>
      </FlexHorizontalAlign>
    </>
  );
};

export default App;
