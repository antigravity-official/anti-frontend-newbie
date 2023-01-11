import { useState } from "react";
import { EuroInfo } from "../types/type";

export const LoadingViewModel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const completeDataFetch = async (
    promiseData: Promise<EuroInfo>
  ): Promise<boolean> => {
    const data = await promiseData;
    if (data) {
      setIsLoading(false);
    }
    return isLoading;
  };
  return { isLoading, completeDataFetch };
};
