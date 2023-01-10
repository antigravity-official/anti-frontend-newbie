import { useQuery } from "react-query";
import EurInfo from "../interfaces/EurInfo";
import { getEurInfo } from "../library/getEurInfo";

export default function ExchangeInfo() {
  const { data, isLoading, isError } = useQuery<EurInfo>("eurInfo", getEurInfo);
  return (
    <div>
      <div>환율기준 (1 유로)</div>
      {data && (
        <div>
          {data.basePrice}
          {data.basePrice - data.openingPrice > 0 && "▲"}
          {data.basePrice - data.openingPrice < 0 && "▼"}
          {data.changePrice}원 ({(data.changePrice / data.basePrice) * 100}%)
        </div>
      )}
      <div>
        <div>살때 : {data?.cashBuyingPrice}</div>
        <div>팔때 : {data?.cashSellingPrice}</div>
        <div>보낼때 : {data?.ttSellingPrice}</div>
        <div>받을때 : {data?.ttBuyingPrice}</div>
      </div>
    </div>
  );
}
