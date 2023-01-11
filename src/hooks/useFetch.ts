import { useState, useEffect } from 'react';

interface Props {
  url: string;
  options?: RequestInit;
}

const useFetch = <T>(
  props: Props
): { data: T | undefined; isLoading: boolean } => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(props.url, props.options);
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.options, props.url]);

  return { data, isLoading };
};

export default useFetch;
