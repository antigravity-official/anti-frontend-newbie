import { useEffect, useState } from 'react';

import ExchangeRate from '../components/ExchangeRate';
import useEurInfo from '../hooks/useEurInfo';
import { EurInfo } from '../types/EurInfo.types';

const Main = () => {
  const { eurInfo, error } = useEurInfo();
  const [eurInfos, setEurInfos] = useState<EurInfo>(eurInfo);

  useEffect(() => {
    setEurInfos(eurInfo);
  }, [eurInfo]);

  if (error)
    return (
      <>
        <span>데이터 요청 실패하였습니다.</span>
      </>
    );

  return (
    <>
      <ExchangeRate eurInfo={eurInfos} />
    </>
  );
};

export default Main;
