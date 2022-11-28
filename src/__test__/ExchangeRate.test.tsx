// jest.config 설정과 setupTest 파일을 설정하였는데, import가 먹지않아 또 import하게 되었습니다.
/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import ExchangeRate from '../components/ExchangeRate';
import { decimalReturn } from '../utils/moneyProcessing';

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

beforeEach(() => {
  render(<ExchangeRate eurInfo={mockEurInfo} />);
});

describe('ExchangeRate', () => {
  it('render title name text', () => {
    const exchangeRateStandard = screen.getByText('🏦 환율기준 (1 유로)');
    const realTimeExchangeRate = screen.getByText('💰 실시간 환율');
    const krwPriceCheck = screen.getByText('⚖️ 시세 체크');

    expect(exchangeRateStandard).toHaveTextContent('🏦 환율기준 (1 유로)');
    expect(realTimeExchangeRate).toHaveTextContent('💰 실시간 환율');
    expect(krwPriceCheck).toHaveTextContent('⚖️ 시세 체크');
  });

  it('Comma for every 3 digits of the amount', () => {
    expect(decimalReturn(mockEurInfo.basePrice)).toBe(Math.floor(1389));
  });
});
