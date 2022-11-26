import { useState } from 'react';

const useExchange = () => {
  const [eurToKrw, setEurToKrw] = useState(0);

  const exchangeEurToKrw = (euro: string, basePrice: number) => {
    setEurToKrw(Number(euro) * basePrice);
  };

  return { eurToKrw, exchangeEurToKrw };
};

export default useExchange;
