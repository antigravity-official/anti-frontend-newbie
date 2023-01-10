import { EurInfoTypes } from '../types/eur-info.type';

const ExchangeRate = ({ eurInfo }: { eurInfo: EurInfoTypes }) => {
  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 ? '▲' : '▼'}
        {eurInfo.changePrice}원 ({(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
    </>
  );
};

export default ExchangeRate;
