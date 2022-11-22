import { useEffect, useState } from "react";

interface ResponseResult<T> {
  data?: Promise<T>;
  loading: boolean;
  error?: Error;
}

export function useFetchData<T>(url: string): ResponseResult<T> {
  const [response, setResponse] = useState<ResponseResult<T>>({
    data: undefined,
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();

        setResponse({ ...response, data: json[0], loading: false });
      } catch (err: any) {
        setResponse({ ...response, error: err });
      }
    };
    fetchData();
  }, []);

  return response;
}
