import { useQuery } from 'react-query';

import getEurInfo from '../api/getEurInfo';

const useEurInfo = () => {
  const { data, isLoading, error } = useQuery('v1/forex/saehyun', getEurInfo, {
    suspense: true,
    retry: false,
  });

  return { eurInfo: data, isLoading, error };
};

export default useEurInfo;
