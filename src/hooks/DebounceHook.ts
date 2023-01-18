import { useEffect, useState } from 'react';

const DebounceHook = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return debouncedValue;
};

export default DebounceHook;
