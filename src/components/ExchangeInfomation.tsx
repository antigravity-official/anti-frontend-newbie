import { getExchangeRateInfo } from '../utils';
import ExchangeRateData from '../types/type';

function ExchangeInfomation(rawData: ExchangeRateData) {
  const { rawInfo, beforeInfo, afterInfo } = getExchangeRateInfo(rawData, 2, 0);
  const isExchangeRateIncreased = rawInfo.basePrice - rawInfo.openingPrice < 0;

  return (
    <div className='h-2/5 flex flex-col justify-evenly'>
      <div>환율기준 (1 {rawInfo.currencyName})</div>
      <div className='bg-gray-100'>
        <span className='pr-3'>
          {beforeInfo.basePrice}
        </span>
        <span className={isExchangeRateIncreased ? 'text-blue-500' : 'text-red-500'}>
          {isExchangeRateIncreased ? '▼' : '▲'}
          {afterInfo.changePrice}원 ({((rawInfo.changePrice / rawInfo.basePrice) * 100).toFixed(2)}%)
        </span>
      </div>
      <div className='text-end'>
        <div className='pb-1'>살때 : {beforeInfo.cashBuyingPrice}</div>
        <div className='pb-1'>팔때 : {beforeInfo.cashSellingPrice}</div>
        <div className='pb-1'>보낼때 : {beforeInfo.ttSellingPrice}</div>
        <div>받을때 : {beforeInfo.ttBuyingPrice}</div>
      </div>
    </div>
  );
}

export default ExchangeInfomation;
