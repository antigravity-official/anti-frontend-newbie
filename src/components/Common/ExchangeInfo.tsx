import { useContext } from "react";
import { ExchangeData } from "../../VM";
import { ArrowChecktype } from "../../types/Type";
export const ExchangeInfo = (prop: ArrowChecktype) => {
  const { data } = useContext(ExchangeData);
  const { ArrowCheck } = prop.ArrowCheck;

  return (
    <div>
      {data?.basePrice}
      {Number(ArrowCheck) > 0 ? "▲" : "▼"}
    </div>
  );
};
