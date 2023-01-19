import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// common functions file
import { krwInputValue, commaEveryThreeDigits } from '../util/commonFunctions';

// components file
import InputCard from '../components/InputCard';
import CircleCard from '../components/CircleCard';
import ChartCard from '../components/chart/ChartCard';
import CountryInfo from '../components/CountryInfo';
import TitleCard from '../components/title/TitleCard';
import DataCardSet from '../components/price_info/DataCardSet';
import Loader from '../components/Loader';

// img file
import europe from '../assets/images/europe.png';
import korea from '../assets/images/korea.png';

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
  };

  useEffect(() => {
    getEurInfo();
    setTimeout(() => {
      setReady(true);
    }, 2400);
  }, []);

  const onChangeEurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInputValue = e.target.value.split('.');
    const addComma = commaEveryThreeDigits(userInputValue);
    setEurInputValue(addComma.join('.'));
  };

  return (
    <>
      {isReady ? (
        <FlexHorizontalAlign>
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
          <CircleWrap>
            <CircleCard />
          </CircleWrap>
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
                <Input
                  value={krwInputValue(eurInputValue, eurInfo.basePrice)}
                  disabled
                ></Input>
                <MoneyUnit style={{ color: '#55FED8' }}>
                  {krwInputValue(eurInputValue, eurInfo.basePrice)}원
                </MoneyUnit>
              </InputCard>
            </InputWrapTwo>
          </FlexVerticalAlign>
        </FlexHorizontalAlign>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Main;
