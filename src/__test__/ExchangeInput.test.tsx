// jest.config 설정과 setupTest 파일을 설정하였는데, import가 먹지않아 또 import하게 되었습니다.
/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ExchangeInput from '../components/ExchangeInput';
import { exchangeToMoney } from '../utils/moneyProcessing';

const mockEurInfo = {
  basePrice: 1389,
  cashBuyingPrice: 1417,
  cashSellingPrice: 1362,
  changePrice: 2,
  openingPrice: 1376,
  ttBuyingPrice: 175,
  ttSellingPrice: 1403,
  changeRate: 0.0019394796,
};
const enterAmount = 0;
const krw = 0;

beforeEach(() => {
  render(<ExchangeInput eurInfo={mockEurInfo} />);
});

describe('ExchangeInput', () => {
  it('render title name text', () => {
    const Eur = screen.getByText('유로');
    const Krw = screen.getByText('원화');

    expect(Eur).toHaveTextContent('유로');
    expect(Krw).toHaveTextContent('원화');
  });

  it('change the type of money into Korean banknotes', () => {
    expect(exchangeToMoney(enterAmount, mockEurInfo.basePrice)).toBe(
      krw.toString()
    );
  });
});
