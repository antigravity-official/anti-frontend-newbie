import { ChangeEvent, useState } from "react";
import { tExchangInfoData } from "../_types/exchangeInfo";
import { tKrw } from "../_types/input";

function InputViewModel(eurInfo: tExchangInfoData) {
  const [changeValue, setChangeValue] = useState<number>();

  const exchangeEurToKrw = (krw: tKrw) => krw * eurInfo.basePrice;

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const krw = Number(e.currentTarget.value);
    setChangeValue(exchangeEurToKrw(krw));
  };

  return { changeValue, onChangeInputValue };
}

export default InputViewModel;
