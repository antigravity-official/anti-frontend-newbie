import { renderHook, act } from "@testing-library/react-hooks";
import useInputViewModel from "./useInputViewModel";

test("유로화 초기값은 1이다", () => {
  const { result } = renderHook(() => useInputViewModel());
  expect(result.current.euroValue).toBe("1");
});

test("유로화에 문자입력시 값이 변하지 않는다", () => {
  const { result } = renderHook(() => useInputViewModel());

  act(() => {
    result.current.onChangeEuroValue("1a");
  });

  expect(result.current.euroValue).toBe("1");
});

test("유로화에 공백입력시 값이 변하지 않는다", () => {
  const { result } = renderHook(() => useInputViewModel());

  act(() => {
    result.current.onChangeEuroValue("1 ");
  });

  expect(result.current.euroValue).toBe("1");
});

test("유로화 소수점 3자리 입력시에는 값이 변하지 않는다", () => {
  const { result } = renderHook(() => useInputViewModel());

  act(() => {
    result.current.onChangeEuroValue("1.123");
  });

  expect(result.current.euroValue).toBe("1");
});

test("원화는 3자리 콤마이고, 소수점이 없어야 한다", () => {
  // [TODO]
  // const { result } = renderHook(() => useInputViewModel());
  // expect(result.current.KWT).toBe("1,234");
});
