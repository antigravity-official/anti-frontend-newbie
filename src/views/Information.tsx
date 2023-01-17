import { KrweurType } from "../helper/get-euro-info";
import "./Information.css";

const Information = (props: { eurInfo: KrweurType }) => {
  const { eurInfo } = props;
  return (
    <div className="info-form">
      <div className="info-form__standard-title">환율기준 (1 유로)</div>
      <div className="info-form__standard-info">
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div className="info-form__sale-info">
        <div>
          <p className="info-form__sale-title">살때</p>
          <p>{eurInfo.cashBuyingPrice}</p>
        </div>
        <div>
          <p className="info-form__sale-title">팔때</p>
          <p>{eurInfo.cashSellingPrice}</p>
        </div>
        <div>
          <p className="info-form__sale-title">보낼때</p>
          <p>{eurInfo.ttSellingPrice}</p>
        </div>
        <div>
          <p className="info-form__sale-title">받을때</p>
          <p>{eurInfo.ttBuyingPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default Information;
