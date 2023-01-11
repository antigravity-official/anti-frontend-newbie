import ExchangeRateData from '../types/type';

const getExchangeRateInfo = (data: ExchangeRateData, beforePoint: number, afterPoint: number) => {
  const change = (price: number, point: number) => {
    return price.toLocaleString(undefined, { maximumFractionDigits: point });
  };

  const rawInfo = {
    currencyName: data.currencyName,
    basePrice: data.basePrice,
    openingPrice: data.openingPrice,
    changePrice: data.changePrice,
  };
  const beforeInfo = {
    basePrice: change(data.basePrice, beforePoint),
    cashBuyingPrice: change(data.cashBuyingPrice, beforePoint),
    cashSellingPrice: change(data.cashSellingPrice, beforePoint),
    ttSellingPrice: change(data.ttSellingPrice, beforePoint),
    ttBuyingPrice: change(data.ttBuyingPrice, beforePoint),
  };
  const afterInfo = {
    changePrice: change(data.changePrice, afterPoint),
  };

  return {
    rawInfo,
    beforeInfo,
    afterInfo,
  }
};

export default getExchangeRateInfo;
