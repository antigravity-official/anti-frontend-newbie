import { Spinners } from "./components/Spinners";
import useFetch from "./components/useFetch";
import NowRate from "./components/NowRate";
import RateDeal from "./components/RateDeal";
import Input from "./components/Input";
import styled from "styled-components";

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

function App() {
  const { eurInfo, isReady } = useFetch();

  return (
    <Wrapper>
      <MainContents>
        {isReady ? (
          <div>
            <Title>
              현재 환율 ( 1 유로 {"=>"} {eurInfo ? eurInfo.basePrice : ""} 원 )
            </Title>
            <Trading>
              매매 기준율 {eurInfo ? <NowRate eurInfo={eurInfo} /> : ""}
            </Trading>

            {eurInfo ? <RateDeal eurInfo={eurInfo} /> : ""}
            <br />
            {eurInfo ? <Input eurInfo={eurInfo} /> : ""}
          </div>
        ) : (
          <div>
            <Spinners />
            <br />
            잠시만 기다려주세요!
          </div>
        )}
      </MainContents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const MainContents = styled.div`
  border: 2px solid green;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 10px 0px;
`;
const Trading = styled.div`
  display: flex;
  margin: 10px 0px;
`;
export default App;
