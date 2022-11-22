import { useEffect, useState } from "react";

const useFetching = (url: string, func?: any) => {
  const [eurInfo, setEurInfo] = useState<any>({});

  const getEurInfo = async () => {
    const krweur = await fetch(url)
      .then((res) => res.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    func(true);
  };

  useEffect(() => {
    getEurInfo();
  }, []);

  return eurInfo;
};

export default useFetching;