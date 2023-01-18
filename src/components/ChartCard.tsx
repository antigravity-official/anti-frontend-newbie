import React from 'react';
import styled from 'styled-components';
import BasicCard from './BasicCard';
import Chart from './Chart';
import CountryInfo from './CountryInfo';
import europe from '../asset/europe.png';

interface ParamProps {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
}

const ChartWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 36rem;
`;

const ChartSize = styled.div`
  width: 32.4rem;
  height: 14rem;
  margin-top: 3rem;
  margin-left: -11rem;
  color: #0f0b21;
`;

const ChartCountry = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
`;

const ChartData = styled.div`
  width: 8rem;
  height: 4rem;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  text-align: right;
`;

const ChartCard = ({ basePrice, openingPrice, changePrice }: ParamProps) => {
  return (
    <>
      <BasicCard width={21.75} height={16.375}>
        <ChartWrap>
          <ChartSize>
            <Chart />
          </ChartSize>
        </ChartWrap>
        <ChartCountry>
          <CountryInfo
            flag={<img src={europe} alt="유럽연합 국기" />}
            CountryKor={'유럽연합'}
            CountryEng={'(EUR)'}
          />
        </ChartCountry>
        <ChartData>
          <p
            style={{
              marginBottom: '0.3rem',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#55FED8',
            }}
          >
            {basePrice}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#55FED8' }}>
            {basePrice - openingPrice > 0 &&
              `▲ ${changePrice}원 (${((changePrice / basePrice) * 100).toFixed(
                2
              )}%)`}
            {basePrice - openingPrice < 0 &&
              `▼ ${changePrice}원 -(${((changePrice / basePrice) * 100).toFixed(
                2
              )}%)`}
          </p>
        </ChartData>
      </BasicCard>
    </>
  );
};

export default ChartCard;
