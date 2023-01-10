import { useCallback, useEffect, useState } from 'react';
import { EurInfoTypes } from '../types/eur-info.type';

const useFetchExchange = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurInfoTypes>();

  const getEurInfo = useCallback(async () => {
    const response = await fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR');
    const data = await response.json();
    const krweur = data[0];

    setEurInfo(krweur);
    setReady(true);
  }, []);

  useEffect(() => {
    getEurInfo();
  }, [getEurInfo]);

  return { isReady, eurInfo };
};

export default useFetchExchange;
