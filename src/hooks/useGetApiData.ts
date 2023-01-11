import { useState } from 'react';
import ExchangeRateData from '../types/type';
import getExchangeRateApi from '../apis/exchangeRateApi';

const useGetApiData = () => {
  const [rawData, setRawData] = useState<ExchangeRateData>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  const getApiData = async (to: string, from: string) => {
    const data: ExchangeRateData = await getExchangeRateApi(to, from);

    setRawData(data);
  };

  return { rawData, getApiData };
};

export default useGetApiData;
