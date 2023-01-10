import { useEffect, useState } from "react";
import EurInfo from "../interfaces/EurInfo";
import { getEurInfo } from "../library/getEurInfo";

interface Props {
  data: EurInfo;
}

export default function ExchangeInput({ data }: Props) {
  const [eurInput, setEurInput] = useState<string>("");
  const [exchangedKrw, setExchangedKrw] = useState<number>();

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  const exchangeEurToKrw = (eur: number) =>
    data ? eur * data.basePrice : null;

  const handleEurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^\d*.?\d{0,2}$/;
    let input = e.target.value.replaceAll(",", "");

    if (!regEx.test(input)) {
      input = input.substring(0, input.length - 1);
    }
    setEurInput(Number(input).toLocaleString());

    let krw = exchangeEurToKrw(Number(input));
    krw != null && setExchangedKrw(Math.floor(krw));
  };
  return (
    <div>
      <input type="text" value={eurInput} onChange={handleEurInput} /> 유로 ▶︎{" "}
      <input value={exchangedKrw?.toLocaleString()} disabled /> 원
    </div>
  );
}
