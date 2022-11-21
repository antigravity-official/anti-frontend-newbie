import { EurInfoType } from "../../../types";

export default function EurInfo(props: {
  isReady: boolean;
  eurInfo?: EurInfoType;
}) {
  const { isReady, eurInfo } = props;

  const numberFloor = (num: number) => {
    return Math.floor(num);
  };

  if (!isReady) return <div>불러오는 중...</div>;
  if (!eurInfo) return null;
  return (
    <div>
      <div>환율기준 (1 유로)</div>
      <div>
        {numberFloor(eurInfo.basePrice)}
        {numberFloor(eurInfo.basePrice) - numberFloor(eurInfo.openingPrice) >
          0 && "▲"}
        {numberFloor(eurInfo.basePrice) - numberFloor(eurInfo.openingPrice) <
          0 && "▼"}
        {numberFloor(eurInfo.changePrice)}원 (
        {(numberFloor(eurInfo.changePrice) / numberFloor(eurInfo.basePrice)) *
          100}
        %)
      </div>
      <div>
        <div>살때 : {numberFloor(eurInfo.cashBuyingPrice)}</div>
        <div>팔때 : {numberFloor(eurInfo.cashSellingPrice)}</div>
        <div>보낼때 : {numberFloor(eurInfo.ttSellingPrice)}</div>
        <div>받을때 : {numberFloor(eurInfo.ttBuyingPrice)}</div>
      </div>
    </div>
  );
}
