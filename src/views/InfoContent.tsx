import useInfoContentViewModel from "../viewModel/useInfoContentViewModel";
import { useContext } from "react";
import AppContext from "../AppContext";

const InfoContent = () => {
  const eurInfo = useContext(AppContext);
  const { changeGap, changeRate } = useInfoContentViewModel();

  return (
    <>
      <div>환율기준 &#40;1 유로 &#41;</div>
      <div>
        {eurInfo.basePrice}
        {changeGap ? "▲" : "▼"}
        {eurInfo.changePrice}원 ({changeRate}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default InfoContent;
