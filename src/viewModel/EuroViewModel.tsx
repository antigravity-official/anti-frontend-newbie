import { useState } from "react";
import { EuroInfoType } from "../types/EuroInfoType";
import { BASE_URL } from "../const";
import { InitialData } from "../const";

const EuroViewModel = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfoType>(InitialData);

  const getEurInfo = async () => {
    const krweur = await fetch(BASE_URL)
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);

    setTimeout(() => {
      setReady(true);
    }, 1000);
  };

  return { isReady, eurInfo, getEurInfo };
};

export default EuroViewModel;
