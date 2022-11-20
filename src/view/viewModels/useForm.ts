import { useState, useEffect } from "react";

export function useForm(basePrice: number) {
  const [eur, setEur] = useState<string | number>(0);
  const [krw, setKrw] = useState<string | number>(0);

  const onChangeEur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEur(e.target.value);
  };

  useEffect(() => {
    const exchangeEurToKrw = () => {
      const eurNum = Number(eur);
      const removekrwDecimalPoints = Number(basePrice.toFixed(0));
      const makeComma = (eurNum * removekrwDecimalPoints).toLocaleString(
        "ko-KR"
      );
      setKrw(makeComma);
    };
    exchangeEurToKrw();
  }, [basePrice, eur]);

  return { eur, krw, onChangeEur };
}
