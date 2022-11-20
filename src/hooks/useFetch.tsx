import { useEffect, useState } from "react";

const useFetch = (url: string, func?: any) => {
  const [data, setData] = useState<any>(null);

  const getEurInfo = async () => {
    const krweur = await fetch(url)
      .then((response) => response.json())
      .then((array) => array[0]);

    setData(krweur);
    func(true);
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  return data;
};

export default useFetch;
