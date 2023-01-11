import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { currencyInfoTypes } from '../types/currencyInfo.type';
import { ENDPOINT } from '../utils/Constant';

const useFetch = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currencyInfo, setCurrencyInfo] = useState<currencyInfoTypes>();

  const getCurrencyInfo = useCallback(async () => {
    try {
      const response = await axios.get(ENDPOINT);
      const currencyData = response.data[0];
      setCurrencyInfo(currencyData);
      setLoading(false);
    } catch (err) {
      console.error('Error: ', err);
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    getCurrencyInfo();
  }, [getCurrencyInfo]);

  return { isLoading, currencyInfo };
};

export default useFetch;
