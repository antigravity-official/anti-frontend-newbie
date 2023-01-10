import React, { useState } from "react";
import { exchangeEurToKrw } from "../util/exchangeEurToKrw";
import AppContext from "../AppContext";
import { useContext } from "react";

const useInputViewModel = () => {
  const [euroValue, setEuroValue] = useState<string>("1");
  const eurInfo = useContext(AppContext);

  const onChangeEuroValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    setEuroValue(value);
  };

  const KWT = Math.floor(
    +exchangeEurToKrw(euroValue, eurInfo.basePrice)
  ).toLocaleString();

  return { euroValue, onChangeEuroValue, KWT };
};

export default useInputViewModel;
