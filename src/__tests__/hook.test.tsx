import { renderHook, act } from '@testing-library/react-hooks';

import useConvert from '../hooks/useConvert';
import useInput from '../hooks/useInput';
import ConvertCurrency from 'lib/ConvertCurrency';
import trimAmount from 'lib/trimAmount';

test('useInput - 1) initial value', () => {
  const test = { boolean: true, string: '1', number: 1, obj: { name: 'test' } };

  Object.entries(test).map(([key, value]) => {
    const { result } = renderHook(() => useInput(value));
    expect(result.current[0]).toBe(value);
    result.current[2]();
    expect(result.current[0]).toBe(value);
  });
});

test('useInput - 2) onChange, reset', () => {
  const { result } = renderHook(() => useInput(1));
  act(() => result.current[1]({ target: { value: 111 } }));
  act(() => result.current[2]());
  expect(result.current[0]).toBe(1);
  expect(result.current[0]).not.toBe(111);
});

test('useConvert', async () => {
  const from = {
    name: '🇪🇺',
    locale: 'en',
    unit: '유로',
    convert: (amount: number, price: number) => ConvertCurrency.eurToKrw(amount, price),
    format: trimAmount(2),
  };

  const into = {
    name: '🇰🇷',
    locale: 'ko',
    unit: '원',
    convert: (amount: number, price: number) => ConvertCurrency.krwToEur(amount, price),
    format: trimAmount(0),
  };

  const { result, waitForValueToChange } = renderHook(() => useConvert({ from, into }));

  expect(result.current.from).toBe(from);
  expect(result.current.into).toBe(into);

  act(() => result.current.handleSwitch());
  expect(result.current.from).toBe(into);
  expect(result.current.into).toBe(from);

  act(() => result.current.handleReset());
  expect(result.current.from).toBe(from);
  expect(result.current.into).toBe(into);
  act(() => result.current.handleConvert(1, 1000));

  await waitForValueToChange(() => result.current!.result);
  expect(result.current.result).toContain('1,000원');

  act(() => result.current.handleSwitch());
  act(() => result.current.handleConvert(1, 1000));
  await waitForValueToChange(() => result.current!.result);
  expect(result.current.result).toContain('0유로');
});
