import { useEffect, useState } from "react";
import { EurInfoProps } from "../@types/EurInfoProps";
import { getData } from "../api/Api";

export const useFetch = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfoProps>();

  useEffect(() => {
    setTimeout(() => {
      getData().then((res) => {
        setEurInfo(res);
        setReady(true);
      });
    }, 500);
  }, []);

  return { isReady, eurInfo };
};
