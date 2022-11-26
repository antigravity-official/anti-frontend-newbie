import { useEffect, useState } from 'react';
import { getEurInfo } from '../api/exchangeApi';
import { EurStateType } from '../types/types';

const useGetData = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurStateType>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  useEffect(() => {
    getEurInfo().then((res) => {
      setEurInfo(res);
      setReady(true);
    });
  }, []);
  return { isReady, eurInfo };
};

export default useGetData;
