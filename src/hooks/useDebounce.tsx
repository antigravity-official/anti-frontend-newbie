import { useEffect, useState } from "react";

type inputType = number | string;

function useDebounce<T>(value: inputType, delay?: number): inputType {
  const [debouncedValue, setDebouncedValue] = useState<inputType>(value);

  useEffect(() => {
    setDebouncedValue("로딩중");
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
