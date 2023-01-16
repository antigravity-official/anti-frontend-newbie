import { ChangeEvent } from 'react';

const compose =
  (...fns: Function[]) =>
  (e: ChangeEvent<HTMLInputElement> | number | string) =>
    fns.reduce<ChangeEvent<HTMLInputElement> | number | string | void>((acc, fn) => {
      return fn(acc);
    }, e);

export default compose;
