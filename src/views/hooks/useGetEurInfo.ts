import { useQuery } from "react-query";
import { getEurInfo } from "../api/api";
import { AxiosError } from "axios";
import { FetchData } from "../types";

const useGetEurInfo = () => {
  return useQuery<FetchData, AxiosError>(["eur"], () => getEurInfo(), {
    onError: () => {
      return null;
    },
  });
};

export default useGetEurInfo;
