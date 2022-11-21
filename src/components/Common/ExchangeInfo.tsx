import { useContext, useEffect } from "react";
import { ExchangeData } from "../../models";
import { Arrow } from "../../viewmodels";

export const ExchangeInfo = () => {
  const { data } = useContext(ExchangeData);
  useEffect(() => {
    Arrow(data);
  }, [data]);
  return (
    <div>
      {data?.basePrice}
      {Arrow(data) > 0 ? "▲" : "▼"}
    </div>
  );
};
