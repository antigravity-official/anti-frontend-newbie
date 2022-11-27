import { EurInfo } from '../types/EurInfo.types';
import TitleName from './common/TitleName';

import styled from '@emotion/styled';

interface ExchangeRateProps {
  eurInfo: EurInfo;
}

const ExchangeRate = ({ eurInfo }: ExchangeRateProps) => {
  const threeCommaFn = (price: number) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <TitleName title='💰 환율기준 (1 유로)' />
      <ExchangeRateContainer>
        <ExchangeRateTop>
          <TitleName title='실시간 환율' />
          <div>
            {eurInfo.basePrice}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 ? '▲' : '▼'}
            {eurInfo.changePrice}원 (
            {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
          </div>
        </ExchangeRateTop>
        <ExchangeRateBottom>
          <TitleName title='시세 체크' />
          <div>살때 : {threeCommaFn(eurInfo.cashBuyingPrice)}원</div>
          <div>팔때 : {threeCommaFn(eurInfo.cashSellingPrice)}원</div>
          <div>보낼때 : {threeCommaFn(eurInfo.ttSellingPrice)}원</div>
          <div>받을때 : {threeCommaFn(eurInfo.ttBuyingPrice)}원</div>
        </ExchangeRateBottom>
      </ExchangeRateContainer>
    </>
  );
};

export default ExchangeRate;

const ExchangeRateContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ExchangeRateTop = styled.div`
  margin-bottom: 1rem;
`;

const ExchangeRateBottom = styled.div``;
