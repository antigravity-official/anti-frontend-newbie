import fetcher from 'lib/queryClient';

export async function getEuroInfo() {
  return await fetcher({ method: 'GET', path: '' });
}
