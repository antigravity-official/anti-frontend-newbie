import { PriceInfo } from "../type/page";

type MoneyPriceInfo = Pick<
  Partial<PriceInfo>,
  "basePrice" | "openingPrice" | "changePrice"
>;

interface MoneyPriceModel extends MoneyPriceInfo {
  updown: () => string;
  percent: () => string;
}

export default function MoneyPrice({
  moneyInfo,
}: {
  moneyInfo: MoneyPriceModel;
}) {
  return (
    <div className="flex  gap-1">
      <span className="font-bold">{moneyInfo?.basePrice}</span>
      <span>{moneyInfo.updown()}</span>
      <span>
        {moneyInfo?.changePrice}원 ({moneyInfo.percent()})
      </span>
    </div>
  );
}
