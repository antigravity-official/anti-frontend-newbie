import { EurInfo } from '../types/EurInfo.types';

interface ExchangeRateProps {
  eurInfo: EurInfo;
}

const ExchangeRate = ({ eurInfo }: ExchangeRateProps) => {
  const threeCommaFn = (price: number) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div>
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {threeCommaFn(eurInfo.cashBuyingPrice)}원</div>
        <div>팔때 : {threeCommaFn(eurInfo.cashSellingPrice)}원</div>
        <div>보낼때 : {threeCommaFn(eurInfo.ttSellingPrice)}원</div>
        <div>받을때 : {threeCommaFn(eurInfo.ttBuyingPrice)}원</div>
      </div>
    </div>
  );
};

export default ExchangeRate;
