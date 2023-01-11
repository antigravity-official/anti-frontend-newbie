import { useState } from "react";
import useEurInfo from "./useEurInfo";

type EventHandler = React.ChangeEventHandler<HTMLInputElement>;

export default function useInput(
  initialValue?: string
): [string, EventHandler, number?] {
  const [value, setValue] = useState(initialValue ?? "");
  const [exchangedPrice, setExchangedPrice] = useState<number>();
  const { data: eurData } = useEurInfo();

  const exchangeEurToKrw = (eur: number) =>
    eurData ? eur * eurData.basePrice : null;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^\d*.?\d{0,2}$/;
    let input = e.target.value;

    if (!regEx.test(input)) {
      input = input.substring(0, input.length - 1);
    }
    setValue(input);

    let krw = exchangeEurToKrw(Number(input));
    krw != null && setExchangedPrice(Math.floor(krw));
  };

  return [value, onChange, exchangedPrice];
}
