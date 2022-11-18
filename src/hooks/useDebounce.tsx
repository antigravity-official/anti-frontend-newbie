import { useEffect, useState } from "react";

type inputType = number | string;

function useDebounce<T>(number: inputType, delay?: number): inputType {
  const [debouncedValue, setDebouncedValue] = useState<inputType>(number);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(number), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [number]);

  return debouncedValue;
}

export default useDebounce;
