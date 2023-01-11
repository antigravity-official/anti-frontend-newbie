import { useRecoilValue } from 'recoil';

import ExchangeRateInfo from '@components/view/ExchangeRateInfo';
import TradingExchangeRate from '@components/view/TradingExchangeRate';

import { euroInfoData } from '@model/exchangeRateInfo';
import { ExchangeRateType } from '@type/exchangeRate';
import { priceStringFormat } from '@utils/priceFormatting';

import * as S from '@components/view-modal/Referenced/Referenced.style';

const Referenced = () => {
  const {
    basePrice,
    changePrice,
    openingPrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = useRecoilValue<ExchangeRateType[]>(euroInfoData)[0];

  const getUpDownArrow = (basePrice: number, openingPrice: number): string => {
    if (basePrice - openingPrice === 0) return '=';
    return basePrice - openingPrice > 0 ? '▲' : '▼';
  };

  const getUpDownPercent = (changePrice: number, basePrice: number): string =>
    ((changePrice / basePrice) * 100).toFixed(2);

  return (
    <S.Wrapper>
      <div>
        <TradingExchangeRate
          basePrice={priceStringFormat(basePrice)}
          changePrice={changePrice}
          upDownArrow={getUpDownArrow(basePrice, openingPrice)}
          upDownPercent={getUpDownPercent(changePrice, basePrice)}
        />
      </div>
      <div>
        <ExchangeRateInfo
          cashBuyingPrice={priceStringFormat(cashBuyingPrice)}
          cashSellingPrice={priceStringFormat(cashSellingPrice)}
          ttSellingPrice={priceStringFormat(ttSellingPrice)}
          ttBuyingPrice={priceStringFormat(ttBuyingPrice)}
        />
      </div>
    </S.Wrapper>
  );
};

export default Referenced;
