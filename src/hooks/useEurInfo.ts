import { useQuery } from "react-query";
import EurInfo from "../interfaces/EurInfo";
import { getEurInfo } from "../library/getEurInfo";

export default function useEurInfo() {
  return useQuery<EurInfo>("eurInfo", getEurInfo, {
    refetchInterval: 3000,
  });
}
