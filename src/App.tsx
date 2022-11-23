import { useEffect } from "react";
import ExchangeMoneyInput from "./components/ExchangeMoneyInput";
import Loading from "./components/Loading";
import MoneyDetail from "./components/MoneyDetail";
import MoneyPrice from "./components/MoneyPrice";
import RateTitle from "./components/RateTitle";
import { PriceInfo } from "./type/page";
import { useFetchData } from "./utils/useFetchData";
import { DetailModel, InfoModel } from "./VM/context";

export const App = () => {
  const { data, loading, error } = useFetchData<PriceInfo>(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  );

  useEffect(() => {
    if (error) return alert(error);
  }, [error]);

  const moneyDetail = new DetailModel(data);
  const moneyInfo = new InfoModel(data);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center mt-16 gap-5 border-2 border-dotted border-black mx-10 py-16">
          <RateTitle country="유로" />
          <MoneyPrice moneyInfo={moneyInfo} />
          <MoneyDetail moneyDetail={moneyDetail} />
          <ExchangeMoneyInput country="유로" basePrice={data?.basePrice} />
        </div>
      )}
    </>
  );
};

export default App;
