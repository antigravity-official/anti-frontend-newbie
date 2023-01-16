import { QueryClient } from 'react-query';

type AnyOBJ = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

// /recent?codes=FRX.KRWEUR
const BASE_URL = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR';

const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  let url = `${BASE_URL}${path}`;
  const options: RequestInit = {
    method,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (params) {
    const searchParams = new URLSearchParams(params);
    url += '?' + JSON.stringify(searchParams);
  }

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetcher;

export const QueryKeys = {
  EurInfo: 'EurInfo',
};
