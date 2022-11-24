import { useQuery } from 'react-query';
import { getEurInfo } from '../apis';
export const useEruInfo = () => {
  const { data, isLoading, error } = useQuery('v1/forex', getEurInfo, {
    suspense: true,
  });
  return { eurInfo: data, isLoading, error };
};
