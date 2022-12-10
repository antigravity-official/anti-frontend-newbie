import { useEffect, useState } from "react";
import { ApiReturnInfoType } from "../types/types";

export function useGetData(API_KEY: string) {
  const [data, setData] = useState<ApiReturnInfoType | Record<string, never>>({});

  const getData = async () => {
    const fetchData = await fetch(API_KEY)
      .then(res => res.json())
      .then(data => data[0]);

    setData(fetchData);
  };

  useEffect(() => {
    getData();
    setInterval(() => {
      getData();
    }, 5000);
  }, []);

  return data;
}
