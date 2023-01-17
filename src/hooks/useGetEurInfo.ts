import { useQuery } from 'react-query';
import { CURRENCY } from '../constants/QueryKey';
import { getEurInfo } from '../api/get';

export default function useGetEurInfo() {
  return useQuery([CURRENCY.KRWEUR], () => getEurInfo());
}
