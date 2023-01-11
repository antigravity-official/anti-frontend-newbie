import { currencyInfoTypes } from '../types/currencyInfo.type';
import { EXCHANGE_MSG as MSG } from '../utils/Constant';

const ExchangeData = ({
  currencyInfo,
}: {
  currencyInfo: currencyInfoTypes;
}) => {
  return (
    <>
      <div>{MSG.STANDARD}</div>
      <div>
        {currencyInfo.basePrice}
        {currencyInfo.change === MSG.RISE && MSG.RISE_SIGN}
        {currencyInfo.change === MSG.FALL && MSG.FALL_SIGN}
        {currencyInfo.changePrice}
        {MSG.KRW} ({(currencyInfo.changeRate * 100).toFixed(2)}%)
      </div>
      <div>
        <div>{MSG.CASH_BUY + currencyInfo.cashBuyingPrice}</div>
        <div>{MSG.CASH_SELL + currencyInfo.cashSellingPrice}</div>
        <div>{MSG.TT_SELL + currencyInfo.ttSellingPrice}</div>
        <div>{MSG.TT_BUY + currencyInfo.ttBuyingPrice}</div>
      </div>
      <hr />
    </>
  );
};

export default ExchangeData;
