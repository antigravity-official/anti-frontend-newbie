import { useQuery } from "@tanstack/react-query";
import { getExchangeInfoByCodeInfo } from "./ExchangeApi";

export const EXCHANGE_API_QUERY_KEY = {
  GET_BY_CODE: (code: string) => ["get", code],
};

export function useGetExchangeInfoByCodeQuery(code: string) {
  const queryKey = EXCHANGE_API_QUERY_KEY.GET_BY_CODE(code);
  const query = useQuery(queryKey, () => getExchangeInfoByCodeInfo(code));
  return { ...query, queryKey };
}
