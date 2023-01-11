import { render } from '@testing-library/react';
import { ExchangeInfomation } from '../../components';
import exchangeRateData from '../mockData/exchangeRateData';

it('ExchangeInfomation rendering', () => {
  const utils = render(<ExchangeInfomation {...exchangeRateData} />,);
  expect(utils.container).toMatchSnapshot();
});
