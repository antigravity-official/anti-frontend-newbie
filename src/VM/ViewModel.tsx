import React, { useEffect, useContext } from "react";
import { ExchangeData } from "./Context";
import { changKR, exchangeEurToKrw, Arrow } from "../model/Common";
import { State } from "../types/Type";
import { onChangeEuro } from "../model";
import { Home } from "../components/pages/Home";

export const ViewModel = () => {
  const { data, isChange, euro, setEuro, setKrw } = useContext(ExchangeData);

  const onChangeExchange = (el: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof el);
    onChangeEuro(el, setEuro);
  };

  const ChangeEuro = (): State =>
    setKrw(changKR(exchangeEurToKrw(Number(euro), data)));

  const ArrowCheck = (): number | undefined => Arrow(data);
  useEffect(() => {
    ChangeEuro();
  }, [euro]);
  return (
    <React.Fragment>
      <Home
        data={data}
        isChange={isChange}
        onChangeExchange={onChangeExchange}
        ChangeEuro={ChangeEuro}
        ArrowCheck={ArrowCheck}
      />
    </React.Fragment>
  );
};
