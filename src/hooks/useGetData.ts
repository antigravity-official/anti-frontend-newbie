import { useState, useEffect } from 'react';
import fetchEuroData from '../apis/fetchEuroData';

const useGetData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchEuroData();
      setData(data);
    })();
  }, []);

  return { data };
};

export default useGetData;
