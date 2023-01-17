import { useState } from "react";
import { EuroInfo } from "../types/types";

export const LoadingViewModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const fetchAndLoading = async (fetchData: Promise<EuroInfo>) => {
    const isFetch = await fetchData;
    if (isFetch) {
      setIsLoading(false);
    }
    return isLoading;
  };
  return { isLoading, fetchAndLoading };
};
