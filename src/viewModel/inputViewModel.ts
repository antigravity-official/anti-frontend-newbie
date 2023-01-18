import { ChangeEvent, useState } from "react";
import { tExchangInfoData } from "../_types/exchangeInfo";
import { tKrw } from "../_types/input";
import { floor, isUnderTwoDemical } from "../_utils/demicalPoint";
import { comma, deleteComma } from "../_utils/comma";

function InputViewModel(eurInfo: tExchangInfoData) {
  const [eurValue, setEurValue] = useState<string>("0");
  const [changeValue, setChangeValue] = useState<string>("0");

  const exchangeEurToKrw = (krw: tKrw) => krw * eurInfo.basePrice;

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    if (isUnderTwoDemical(value)) {
      return window.alert("숫자와 숫자 소숫점 2자리까지만 입력가능합니다");
    }

    const eur = deleteComma(value || "0");
    const change = exchangeEurToKrw(eur);
    const modiChange = comma(floor(change, 0));

    setEurValue(value);
    setChangeValue(modiChange);
  };

  return { changeValue, eurValue, onChangeInputValue };
}

export default InputViewModel;
