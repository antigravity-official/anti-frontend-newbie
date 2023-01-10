import React, { useState } from "react";
import { exchangeEurToKrw } from "../util/exchangeEurToKrw";
import AppContext from "../AppContext";
import { useContext } from "react";

const InputViewModel = () => {
  const [eurValue, setEurValue] = useState<string>("1");
  const { eurInfo } = useContext(AppContext);

  const onChangeEurValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    if (isNaN(+value)) {
      return;
    }

    if (value.includes(" ")) {
      return;
    }

    if (/^\d*\.\d{3}$/g.test(value)) {
      return;
    }

    setEurValue(value);
  };

  const KWT = () => {
    return Math.floor(
      +exchangeEurToKrw(eurValue, eurInfo.basePrice)
    ).toLocaleString();
  };

  return { eurValue, onChangeEurValue, KWT };
};

export default InputViewModel;
