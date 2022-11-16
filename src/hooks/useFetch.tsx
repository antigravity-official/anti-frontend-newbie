import { useEffect, useState } from 'react';
import { IEurInfo } from '../types/eurInfo';
import { getEurInfo } from '../api';

export const useFetch = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<IEurInfo>({});

  useEffect(() => {
    async function fetchDate() {
      const krweur = await getEurInfo();
      setEurInfo(krweur);
      setLoading(true);
    }
    fetchDate();
  }, []);

  return { eurInfo, isLoading };
};
