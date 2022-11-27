import { EurInfo } from '../types/EurInfo.types';
import TitleName from './common/TitleName';
import { decimalReturn } from '../utils/moneyProcessing';

import styled from '@emotion/styled';

interface ExchangeRateProps {
  eurInfo: EurInfo;
}

const ExchangeRate = ({ eurInfo }: ExchangeRateProps) => {
  return (
    <>
      <TitleName title='🏦 환율기준 (1 유로)' />
      <ExchangeRateContainer>
        <ExchangeRateTop>
          <TitleName title='💰 실시간 환율' />
          <div>
            {eurInfo.basePrice}
            {eurInfo.basePrice - eurInfo.openingPrice > 0 ? '▲' : '▼'}
            {eurInfo.changePrice}원 ({(eurInfo.changeRate * 100).toFixed(2)}%)
          </div>
        </ExchangeRateTop>
        <ExchangeRateBottom>
          <TitleName title='⚖️ 시세 체크' />
          <div>살때 : {decimalReturn(eurInfo.cashBuyingPrice)}원</div>
          <div>팔때 : {decimalReturn(eurInfo.cashSellingPrice)}원</div>
          <div>보낼때 : {decimalReturn(eurInfo.ttSellingPrice)}원</div>
          <div>받을때 : {decimalReturn(eurInfo.ttBuyingPrice)}원</div>
        </ExchangeRateBottom>
      </ExchangeRateContainer>
    </>
  );
};

export default ExchangeRate;

const ExchangeRateContainer = styled.div`
  background-color: #fffee7;
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
