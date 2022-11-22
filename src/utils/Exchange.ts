import { useState } from "react";
import ReplaceDigitNumber from "./ReplaceDigitNumber";

export function Exchange(price?: number) {
  const [exMoney, setExMoney] = useState<string>("");

  const pattern = /^\d*(\.\d{0,2})?$/;

  const onChange = (value: string) => {
    if (!pattern.test(value)) {
      return alert("소수 두 자리까지만 가능합니다");
    }
    let change = BigInt(Math.ceil(+value * price!!)).toString();

    setExMoney(change);
  };

  return { exMoney: ReplaceDigitNumber(exMoney), onChange };
}
