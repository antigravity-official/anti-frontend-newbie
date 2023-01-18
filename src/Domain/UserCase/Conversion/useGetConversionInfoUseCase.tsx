import { useQuery } from 'react-query';
import { QueryKeys } from 'lib/queryClient';
import { getConversionInfo } from 'Data/Repository/ConversionRepository';

export default function useGetConversionInfoUseCase() {
  return useQuery(QueryKeys.ConversionInfo, () => getConversionInfo());
}
