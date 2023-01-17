import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { EurInfoAtom } from "../store/eurInfo";

export const useGetEurInfo = () => {
  const [eurInfo, setEurInfo] = useRecoilState(EurInfoAtom);

  const getEurInfo = useCallback(async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
  }, [setEurInfo]);

  useEffect(() => {
    getEurInfo();
  }, [getEurInfo]);

  return eurInfo;
};
