import { render } from '@testing-library/react';
import { ExchangeCalculator } from '../../components';
import exchangeRateData from '../mockData/exchangeRateData';

it('ExchangeCalculator rendering', () => {
  const utils = render(<ExchangeCalculator {...exchangeRateData} />,);
  expect(utils.container).toMatchSnapshot();
});
