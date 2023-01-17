import React, { useEffect, useState } from "react";
import { Input, RateTable } from "components";
import { Wrapper, ChangeToEuro } from "./style";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { getEuroData } from "store/modules/euroInfo";
import { Ring } from "@uiball/loaders";
import { AiFillEuroCircle } from "react-icons/ai";
import { FcCurrencyExchange } from "react-icons/fc";

export const Home = () => {
  const [kwrValue, setKwrValue] = useState("");
  const dispatch = useAppDispatch();
  const { info, isLoading } = useAppSelector(({ euroInfo }) => euroInfo);

  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const euroValue = Number(e.target.value.replaceAll(",", ""));
    if (euroValue) {
      const changedKrw = (euroValue * info.basePrice).toLocaleString("ko-KR", {
        maximumFractionDigits: 0,
      });
      setKwrValue(changedKrw);
    }
  };

  useEffect(() => {
    dispatch(getEuroData());
  }, [dispatch]);

  return (
    <Wrapper isLoading={isLoading}>
      {isLoading ? (
        <Ring size={40} lineWeight={4} speed={2} color="navy" />
      ) : (
        <>
          <section>
            <h2>
              <AiFillEuroCircle />
              <span>유럽연합 환율기준 (1 유로)</span>
            </h2>
            <RateTable />
          </section>

          <ChangeToEuro>
            <h2>
              <FcCurrencyExchange />
              유로(EUR) ▶️ 대한민국 원화(KRW)
            </h2>
            <div className="changeToEuro__input-box">
              <Input label="유로(EURO)" id="euro" onChange={exchangeEurToKrw} />
              <p>⬇️⬆️</p>
              <Input
                label="대한민국 원화(KRW)"
                id="krw"
                value={kwrValue}
                disabled
              />
            </div>
          </ChangeToEuro>
        </>
      )}
    </Wrapper>
  );
};
