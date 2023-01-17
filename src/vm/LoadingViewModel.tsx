import { useState } from "react";
import { EuroInfo } from "../types/Euroinfo";

export const LoadingViewModel = () => {
  const [isReady, setIsReady] = useState(true);

  const fetchAndLoading = async (EuroInfo: Promise<EuroInfo>) => {
    const isFetch = await EuroInfo;
    if (isFetch) {
      setIsReady(false);
    }
    return isReady;
  };
  return { isReady, fetchAndLoading };
};
