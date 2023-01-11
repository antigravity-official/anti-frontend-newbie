import React, { useEffect, useState } from 'react';
import Exchange from './components/Exchange';
import Info from './components/Info';
import { EurInfo } from './type';
import './App.css';

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EurInfo>();
  console.log(eurInfo);
  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  return (
    <div>
      {/*  isReady의 상태에 따라 loading 구현을 하였습니다.  */}
      {isReady ? (
        <>
          {/* 환율기준표와 환율을 계산해주는 기능에 따라 컴포넌트를 분리하였습니다. */}
          <Info eurInfo={eurInfo} />
          <hr />
          <Exchange eurInfo={eurInfo} />
        </>
      ) : (
        <div className='loading'>
          <div>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default App;
