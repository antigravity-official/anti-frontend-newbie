import { PriceInfo } from "../type/page";

type MoneyPriceInfo = Pick<
  PriceInfo,
  "basePrice" | "openingPrice" | "changePrice"
>;

export default function MoneyPrice({
  moneyInfo,
}: {
  moneyInfo: MoneyPriceInfo;
}) {
  let updown = moneyInfo.basePrice - moneyInfo.openingPrice > 0 ? "▲" : "▼";

  return (
    <div className="flex  gap-1">
      <span>{moneyInfo.basePrice}</span>
      <span>{updown}</span>
      <span>
        {moneyInfo.changePrice}원 (
        {(moneyInfo.changePrice / moneyInfo.basePrice) * 100}%)
      </span>
    </div>
  );
}
