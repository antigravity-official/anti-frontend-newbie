import fetcher from 'lib/queryClient';

class EuroInfoApi {
  public async getKRWEUR() {
    return await fetcher({ method: 'GET', path: '' });
  }
}

export default new EuroInfoApi();
