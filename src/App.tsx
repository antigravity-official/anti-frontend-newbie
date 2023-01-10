import { Spinners } from "./components/Spinners";
import useFetch from "./components/useFetch";
import NowRate from "./components/NowRate";
import RateDeal from "./components/RateDeal";
import Input from "./components/Input";

export type priceInformation = {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  code: string;
  country: string;
  createdAt: string;
  currencyCode: string;
  currencyName: string;
  currencyUnit: number;
  date: string;
  exchangeCommission: number;
  fcSellingPrice: null;
  high52wDate: string;
  high52wPrice: number;
  highPrice: number;
  id: number;
  low52wDate: string;
  low52wPrice: number;
  lowPrice: number;
  modifiedAt: string;
  name: string;
  openingPrice: number;
  provider: string;
  recurrenceCount: number;
  signedChangePrice: number;
  signedChangeRate: number;
  tcBuyingPrice: null;
  time: string;
  timestamp: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  usDollarRate: number;
};
export const App = () => {
  const { eurInfo, isReady } = useFetch();

  if (!isReady) return <Spinners />;
  return (
    <div>
      <div>환율기준 (1 유로)</div>
      {eurInfo ? <NowRate eurInfo={eurInfo} /> : ""}
      {eurInfo ? <RateDeal eurInfo={eurInfo} /> : ""}
      <br />
      {eurInfo ? <Input eurInfo={eurInfo} /> : ""}
    </div>
  );
};

export default App;
