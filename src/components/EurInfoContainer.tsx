import { EurInfoContainerProps } from "../@types/EurDetailProps";

const EurInfoContainer = ({
  priceDetail,
}: {
  priceDetail: EurInfoContainerProps;
}) => {
  return (
    <section className="h-48 w-full">
      <p>환율기준 (1 유로)</p>
      <div>
        {priceDetail.basePrice}
        {priceDetail.moneyState()}
        {priceDetail.changePrice}원 ({priceDetail.percent()})
      </div>
      <div>
        <p>살때 : {priceDetail.cashBuyingPrice}</p>
        <p>팔때 : {priceDetail.cashSellingPrice}</p>
        <p>보낼때 : {priceDetail.ttSellingPrice}</p>
        <p>받을때 : {priceDetail.ttBuyingPrice}</p>
      </div>
    </section>
  );
};

export default EurInfoContainer;
