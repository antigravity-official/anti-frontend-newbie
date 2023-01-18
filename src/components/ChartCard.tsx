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

const Wrap = styled.div`
  width: 21.75rem;
  height: 16.375rem;
  @media screen and (max-width: 850px) {
    position: absolute;
    top: 5.8rem;
  }
`;

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
      <Wrap>
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
            {basePrice - openingPrice > 0 ? (
              <p style={{ fontSize: '0.875rem', color: '#55FED8' }}>
                ▲ {changePrice}원{' '}
                <span style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                  ({((changePrice / basePrice) * 100).toFixed(2)}%)
                </span>
              </p>
            ) : (
              <p style={{ fontSize: '0.875rem', color: '#FE55F7' }}>
                ▼ {changePrice}원{' '}
                <span style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                  (-
                  {((changePrice / basePrice) * 100).toFixed(2)}%)
                </span>
              </p>
            )}
          </ChartData>
        </BasicCard>
      </Wrap>
    </>
  );
};

export default ChartCard;
