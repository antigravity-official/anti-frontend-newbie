import useCalculate from '../hooks/useCalculate';
import { currencyInfoTypes } from '../types/currencyInfo.type';
import { EXCHANGE_MSG as MSG } from '../utils/Constant';

const ExchangeRate = ({
  currencyInfo,
}: {
  currencyInfo: currencyInfoTypes;
}) => {
  const { fromCurrency, toCurrency, handleCurrency } =
    useCalculate(currencyInfo);

  return (
    <div>
      <input type="text" value={fromCurrency} onChange={handleCurrency} />{' '}
      {MSG.EUR} {MSG.EQUAL}
      <input type="text" value={toCurrency} disabled />
      {MSG.KRW}
    </div>
  );
};

export default ExchangeRate;
