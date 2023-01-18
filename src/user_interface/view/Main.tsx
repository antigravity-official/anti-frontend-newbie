import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// components file
import InputCard from '../components/InputCard';
import CircleCard from '../components/CircleCard';
import ChartCard from '../components/chart/ChartCard';
import CountryInfo from '../components/CountryInfo';
import TitleCard from '../components/title/TitleCard';
import DataCardSet from '../components/price_info/DataCardSet';

// img file
import europe from '../../assets/images/europe.png';
import korea from '../../assets/images/korea.png';

const FlexVerticalAlign = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media screen and (max-width: 850px) {
  }
`;

const FlexHorizontalAlign = styled.section`
  display: flex;
  gap: 0.75rem;
  @media screen and (max-width: 850px) {
    width: 21.77rem;
    height: 51.94rem;
    flex-direction: column;
    position: relative;
  }
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

const InputWrapOne = styled.section`
  @media screen and (max-width: 850px) {
    position: absolute;
    top: 34.4rem;
  }
`;

const InputWrapTwo = styled.section`
  @media screen and (max-width: 850px) {
    position: absolute;
    top: 43.15rem;
  }
`;

const CircleWrap = styled.section`
  align-self: end;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 850px) {
    margin-bottom: 0;
    position: absolute;
    top: 41.9rem;
    left: 9.7rem;
    z-index: 3;
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

export const Main = () => {
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
    <>
      <FlexHorizontalAlign style={{ display: 'flex', gap: '0.75rem' }}>
        {/* left box */}
        <FlexVerticalAlign>
          <TitleCard />
          <DataCardSet
            cashBuyingPrice={eurInfo.cashBuyingPrice.toLocaleString()}
            cashSellingPrice={eurInfo.cashSellingPrice.toLocaleString()}
            ttSellingPrice={eurInfo.ttSellingPrice.toLocaleString()}
            ttBuyingPrice={eurInfo.ttBuyingPrice.toLocaleString()}
          />
          <InputWrapOne>
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
          </InputWrapOne>
        </FlexVerticalAlign>

        {/* circle */}
        <CircleWrap>
          <CircleCard />
        </CircleWrap>

        {/* right box */}
        <FlexVerticalAlign>
          <ChartCard
            basePrice={eurInfo.basePrice}
            openingPrice={eurInfo.openingPrice}
            changePrice={eurInfo.changePrice}
          />
          <InputWrapTwo>
            <InputCard width={21.8} height={8.75}>
              <CountryInfo
                flag={<img src={korea} alt="대한민국 국기" />}
                CountryKor={'대한민국'}
                CountryEng={'(KRW)'}
              />
              <Input value={krwInput()} disabled></Input>
              <MoneyUnit style={{ color: '#55FED8' }}>{krwInput()}원</MoneyUnit>
            </InputCard>
          </InputWrapTwo>
        </FlexVerticalAlign>
      </FlexHorizontalAlign>
    </>
  );
};

export default Main;
