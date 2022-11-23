import { PriceInfo } from "../type/page";

type MoneyDetailInfo = Pick<
  Partial<PriceInfo>,
  "cashBuyingPrice" | "cashSellingPrice" | "ttSellingPrice" | "ttBuyingPrice"
>;

export default function MoneyDetail({
  moneyDetail,
}: {
  moneyDetail: MoneyDetailInfo;
}) {
  return (
    <div className="flex flex-col gap-3 font-bold text-md ">
      <span>살때 : {moneyDetail?.cashBuyingPrice}</span>
      <span>팔때 : {moneyDetail?.cashSellingPrice}</span>
      <span>보낼때 : {moneyDetail?.ttSellingPrice}</span>
      <span>받을때 : {moneyDetail?.ttBuyingPrice}</span>
    </div>
  );
}
