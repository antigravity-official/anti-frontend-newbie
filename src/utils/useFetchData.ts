import { useEffect, useState } from "react";

type FetchError = {
  message: string;
};

interface ResponseResult<T> {
  data: T | undefined;
  loading: boolean;
  error?: FetchError | unknown;
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
      } catch (err: unknown) {
        setResponse({ ...response, error: err });
      }
    };
    fetchData();
  }, []);

  return response;
}
