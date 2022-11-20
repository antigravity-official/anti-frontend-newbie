import { useMemo } from "react";
import { TodayExchangeRateDetails } from "../../type/index";

export function useDetails({ ...props }: TodayExchangeRateDetails) {
  const removeKrwDecimalPoints = useMemo(() => {
    return Object.values(props).map((price) => price.toFixed(0));
  }, [props]);

  return { removeKrwDecimalPoints };
}
