import React, { useEffect, useState, useCallback } from 'react';
import { EurInfo } from './types/eur';
import { getEurInfo } from './api/eurInfoApi';
import { ExchangedPrices, ExchangeRate } from './components/eurInfo';
import ExchangeForm from './components/exchange/ExchangeForm';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfo | null>(null);

  const fetchEurInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const krweur: EurInfo = await getEurInfo();
      setEurInfo(krweur);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEurInfo();
  }, [fetchEurInfo]);

  if (isLoading) return <p>Loading...</p>;

  if (isError || !eurInfo) return <p>Error</p>;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <ExchangeRate
        basePrice={eurInfo.basePrice}
        changePrice={eurInfo.changePrice}
        openingPrice={eurInfo.openingPrice}
      />
      <ExchangedPrices
        cashBuyingPrice={eurInfo.cashBuyingPrice}
        cashSellingPrice={eurInfo.cashSellingPrice}
        ttSellingPrice={eurInfo.ttSellingPrice}
        ttBuyingPrice={eurInfo.ttBuyingPrice}
      />
      <hr />
      <ExchangeForm basePrice={eurInfo.basePrice} />
    </div>
  );
};

export default App;
