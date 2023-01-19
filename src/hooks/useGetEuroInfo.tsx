import { useQuery } from 'react-query';
import { QueryKeys } from 'lib/queryClient';
import { getEuroInfo } from 'repositories/ConversionRepository';

export default function useGetEuroInfo() {
  return useQuery(QueryKeys.ConversionInfo, () => getEuroInfo());
}
