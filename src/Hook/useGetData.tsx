import { useEffect, useState } from "react";

export function useGetData(API_KEY: string) {
  const [data, setData] = useState();

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
