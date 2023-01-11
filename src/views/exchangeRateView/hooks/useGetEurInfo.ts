import { useQuery } from "react-query";
import { getEurInfo } from "../api/api";
import { AxiosError } from "axios";
import { EurInfoTypes } from "../types";

const useGetEurInfo = () => {
  return useQuery<EurInfoTypes, AxiosError>(["eur"], () => getEurInfo(), {
    refetchInterval: 60000,
    retry: false,
  });
};

export default useGetEurInfo;
