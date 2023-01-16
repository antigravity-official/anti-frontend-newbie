import fetcher from 'lib/queryClient';

class EuroInfoApi {
  public async getKRW() {
    return await fetcher({ method: 'GET', path: '' });
  }
}

export default new EuroInfoApi();
