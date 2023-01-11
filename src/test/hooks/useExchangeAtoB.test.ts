import { renderHook, act } from '@testing-library/react-hooks';
import exchangeRateData from '../mockData/exchangeRateData';
import { useExchangeAtoB } from '../../hooks';

it('환율 계산기', async () => {
  const { result } = renderHook(() => useExchangeAtoB());
  const inputValue = '2';
  const expected = '2,661';

  act(() => result.current.exchangeAtoB(exchangeRateData, inputValue));
  expect(result.current.price).toEqual(expected);
});
