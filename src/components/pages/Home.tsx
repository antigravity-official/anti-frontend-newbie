import { useContext } from "react";
import { ExchangeData } from "../../models";
import { ExchangeInfo } from "../Common/ExchangeInfo";
import { Input } from "../Common/Input";
import { MarketPrice } from "../Common/MarketPrice";

export const Home: React.FC = () => {
  const { boolean } = useContext(ExchangeData);
  return (
    <div>
      {boolean ? (
        <div>
          <ExchangeInfo />
          <MarketPrice />
          <Input />
        </div>
      ) : null}
    </div>
  );
};
