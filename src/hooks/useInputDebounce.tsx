import { useEffect, useState } from "react";

type inputType = number | string | undefined;

function useInputDebounce<T>(
  value: inputType,
  delay?: number,
  loadingText?: string
): inputType {
  const [debouncedValue, setDebouncedValue] = useState<inputType>(value);

  useEffect(() => {
    setDebouncedValue(loadingText);
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}

export default useInputDebounce;
