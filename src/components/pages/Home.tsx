import { ExchangeInfo } from "../Common/ExchangeInfo";
import { Input } from "../Common/Input";
import { Loading } from "../Common/Loading";
import { MarketPrice } from "../Common/MarketPrice";
// import { Loading } from "../Common/Loading";
import {
  ApiExchangeContents,
  ArrowChecktype,
  PropsData,
} from "../../types/Type";
import "./Home.css";
export const Home = (prop: PropsData) => {
  // const { isChange } = useContext(ExchangeData);

  const { data, isChange, onChangeExchange, ChangeEuro, ArrowCheck } = prop;
  return (
    <div className="Card">
      {isChange ? (
        <div className="Container">
          <ExchangeInfo ArrowCheck={ArrowCheck} />
          <MarketPrice data={data} />
          <Input
            data={data}
            onChangeExchange={onChangeExchange}
            ChangeEuro={ChangeEuro}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
