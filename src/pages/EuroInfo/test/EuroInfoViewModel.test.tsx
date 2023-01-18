import { renderHook, act } from '@testing-library/react-hooks';
import useEuroInfoViewModel from '../EuroInfoViewModel';
import { wrapper } from '../../../test/utils';
import { fakeEuroInfo } from '../../../test/euroInfoData';

describe('EuroInfoViewModel', () => {
  let fakeApi: { euro: jest.Mock };

  beforeEach(() => {
    fakeApi = {
      euro: jest.fn(),
    };
  });

  afterAll(() => {
    fakeApi.euro.mockReset();
  });

  it('render return values correctly', async () => {
    fakeApi.euro.mockResolvedValue(fakeEuroInfo);
    const { result, waitForNextUpdate } = renderHook(
      () => useEuroInfoViewModel(),
      {
        wrapper: wrapper(fakeApi),
      }
    );

    expect(result.current.euro).toBe('');
    expect(result.current.krw).toBe('0');
    expect(result.current.eurInfo).toBe(undefined);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isFetching).toBe(true);

    await waitForNextUpdate();

    expect(result.current.euro).toBe('');
    expect(result.current.krw).toBe('0');
    expect(result.current.eurInfo).toBe(fakeEuroInfo);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isFetching).toBe(false);
  });

  it('render input ERU and converted KRW correctly', () => {
    fakeApi.euro.mockResolvedValue(fakeEuroInfo);
    const { result } = renderHook(() => useEuroInfoViewModel(), {
      wrapper: wrapper(fakeApi),
    });

    expect(result.current.euro).toBe('');

    act(() =>
      result.current.onChange({
        target: { value: '100' },
      } as React.ChangeEvent<HTMLInputElement>)
    );

    expect(result.current.euro).toBe('100');
    expect(result.current.krw).toBe('134,001');

    act(() =>
      result.current.onChange({
        target: { value: '10000' },
      } as React.ChangeEvent<HTMLInputElement>)
    );
    expect(result.current.euro).toBe('10,000');
    expect(result.current.krw).toBe('13,400,100');
  });

  it('enter only up to two decimal place and number or "."', () => {
    const { result } = renderHook(() => useEuroInfoViewModel(), {
      wrapper: wrapper(fakeApi),
    });

    act(() =>
      result.current.onChange({
        target: { value: '++' },
      } as React.ChangeEvent<HTMLInputElement>)
    );
    expect(result.current.euro).toBe('');

    act(() =>
      result.current.onChange({
        target: { value: '1234.' },
      } as React.ChangeEvent<HTMLInputElement>)
    );
    expect(result.current.euro).toBe('1,234.');

    act(() =>
      result.current.onChange({
        target: { value: '1234.56' },
      } as React.ChangeEvent<HTMLInputElement>)
    );
    expect(result.current.euro).toBe('1,234.56');
  });
});
