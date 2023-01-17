import fetcher from 'lib/queryClient';

export async function getConversionInfo() {
  return await fetcher({ method: 'GET', path: '' });
}
