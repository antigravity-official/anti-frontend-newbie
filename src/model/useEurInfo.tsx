import React, { useState, useEffect, ReactElement } from "react";
import { EurInfo } from "../interfaces/euro";

const EUR_API_URL = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";

export const useEurInfo = (): { eurInfo: EurInfo | null } => {
  const [eurInfo, setEurInfo] = useState<EurInfo | null>(null);

  const eurInfoModel = async () => {
    const krweur = await fetch(EUR_API_URL)
      .then((response) => response.json())
      .then((array) => array[0]);
    setEurInfo(krweur);
  };

  useEffect(() => {
    eurInfoModel();
  }, []);

  return { eurInfo };
};
