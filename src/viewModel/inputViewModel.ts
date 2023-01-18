import { ChangeEvent, useState } from "react";
import { tKrw } from "../_types/input";
import ExchangeInfoViewModel from "./ExchangeInfoViewModel";

function InputViewModel() {
  const { eurInfo } = ExchangeInfoViewModel();
  const [changeValue, setChangeValue] = useState<number>();

  const exchangeEurToKrw = (krw: tKrw) => krw * eurInfo.basePrice;

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const krw = Number(e.currentTarget.value);
    setChangeValue(exchangeEurToKrw(krw));
  };

  return { changeValue, onChangeInputValue };
}

export default InputViewModel;
