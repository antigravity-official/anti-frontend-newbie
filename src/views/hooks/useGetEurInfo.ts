import { useQuery } from "react-query";
import { getEurInfo } from "../api/api";
import { AxiosError } from "axios";

interface FetchData {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

const useGetEurInfo = () => {
  return useQuery<FetchData, AxiosError>(["eur"], () => getEurInfo(), {
    onError: () => {
      return null;
    },
  });
};

export default useGetEurInfo;
