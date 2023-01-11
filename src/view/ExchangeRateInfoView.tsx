import { EuroInfo } from "../types/type";

interface Props {
  euroInfo: EuroInfo;
}
export const ExchangeRateInfoView = ({ euroInfo }: Props) => {
  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {euroInfo.basePrice}
        {euroInfo.basePrice - euroInfo.openingPrice > 0 ? "▲" : "▼"}
        {euroInfo.changePrice}원 (
        {(euroInfo.changePrice / euroInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {euroInfo.cashBuyingPrice}</div>
        <div>팔때 : {euroInfo.cashSellingPrice}</div>
        <div>보낼때 : {euroInfo.ttSellingPrice}</div>
        <div>받을때 : {euroInfo.ttBuyingPrice}</div>
      </div>
      {/* <hr /> */}
    </>
  );
};
