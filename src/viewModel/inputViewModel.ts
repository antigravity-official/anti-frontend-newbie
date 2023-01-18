import { ChangeEvent, useState } from "react";
import { tExchangInfoData } from "../_types/exchangeInfo";
import { tKrw } from "../_types/input";
import { floor } from "../_utils/demicalPoint";
import { comma } from "../_utils/comma";

function InputViewModel(eurInfo: tExchangInfoData) {
  const [changeValue, setChangeValue] = useState<string>();

  const exchangeEurToKrw = (krw: tKrw) => krw * eurInfo.basePrice;

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const krw = Number(e.currentTarget.value);
    const change = exchangeEurToKrw(krw);
    const modiChange = comma(floor(change, 0));

    setChangeValue(modiChange);
  };

  return { changeValue, onChangeInputValue };
}

export default InputViewModel;
