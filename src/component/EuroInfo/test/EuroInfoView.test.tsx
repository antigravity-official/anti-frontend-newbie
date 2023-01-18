import renderer from 'react-test-renderer';
import EuroInfoView from '../EuroInfoView';
import useEuroInfoViewModel from '../EuroInfoViewModel';
import { withAllProviders } from '../../../utils/tests/utils';

const mockedUseEuroInfoViewModel = useEuroInfoViewModel as jest.Mock;
jest.mock('../EuroInfoViewModel');

describe('EuroInfoView', () => {
  let fakeApi: { euro: jest.Mock };

  beforeEach(() => {
    fakeApi = {
      euro: jest.fn(),
    };
  });

  afterEach(() => fakeApi.euro.mockReset());

  it('renders correctly while is loading', () => {
    mockedUseEuroInfoViewModel.mockReturnValue({
      euro: '',
      krw: '0',
      eurInfo: null,
      isLoading: true,
      isFetching: true,
      onChange: jest.fn(),
    });
    const tree = renderer
      .create(withAllProviders(<EuroInfoView />, fakeApi))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly while is fetching', () => {
    mockedUseEuroInfoViewModel.mockReturnValue({
      euro: '',
      krw: '0',
      eurInfo: null,
      isLoading: false,
      isFetching: true,
      onChange: jest.fn(),
    });
    const tree = renderer
      .create(withAllProviders(<EuroInfoView />, fakeApi))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', async () => {
    mockedUseEuroInfoViewModel.mockReturnValue({
      euro: '1',
      krw: '1300',
      eurInfo: {
        basePrice: 1339.98,
        cashBuyingPrice: 1366.64,
        cashSellingPrice: 1313.32,
        changePrice: 3.86,
        openingPrice: 1336.18,
        ttBuyingPrice: 1326.59,
        ttSellingPrice: 1353.37,
      },
      isLoading: false,
      isFetching: false,
      onChange: jest.fn(),
    });

    const tree = renderer
      .create(withAllProviders(<EuroInfoView />, fakeApi))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
