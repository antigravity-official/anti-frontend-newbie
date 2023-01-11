import { useEffect, useState } from 'react';
import { ExchangeInfomation, ExchangeCalculator, Loading, Title } from '../components';
import { useGetApiData } from '../hooks';

function Home() {
  const [isReady, setReady] = useState(false);
  const { rawData, getApiData } = useGetApiData();

  const getEurInfo = async () => {
    await getApiData('KRW', 'EUR');
    setTimeout(() => setReady(true), 1000);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return <Loading />;
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center'>
      <div className='w-80 sm:w-96'>
        <Title />
        <div className='h-4/6 bg-white p-4 border rounded-xl border-white'>
          <ExchangeInfomation {...rawData} />
          <ExchangeCalculator {...rawData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
