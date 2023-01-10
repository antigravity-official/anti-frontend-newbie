import { useCallback, useEffect, useState } from 'react';
import ExchangeInfo from './components/ExchangeInfo';
import ExchangeInput from './components/ExchangeInput';
import ExchangeRate from './components/ExchangeRate';

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});

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

  if (!isReady) return <p>Exchange Info Loading...</p>;

  return (
    <>
      <ExchangeRate eurInfo={eurInfo} />
      <ExchangeInfo eurInfo={eurInfo} />
      <hr />
      <ExchangeInput />
    </>
  );
};

export default App;
