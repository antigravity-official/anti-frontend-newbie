import { EurInfoProps } from "../../@types/EurInfoProps";

const EurInfoContainer = ({
  basePrice,
  openingPrice,
  changePrice,
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: EurInfoProps) => {
  return (
    <section className="h-48 w-full">
      <p>환율기준 (1 유로)</p>
      <div>
        {basePrice}
        {basePrice - openingPrice > 0 ? <span>▲</span> : <span>▼</span>}
        {changePrice}원 ({((changePrice / basePrice) * 100).toFixed(2)}%)
      </div>
      <div>
        <p>살때 : {cashBuyingPrice}</p>
        <p>팔때 : {cashSellingPrice}</p>
        <p>보낼때 : {ttSellingPrice}</p>
        <p>받을때 : {ttBuyingPrice}</p>
      </div>
    </section>
  );
};

export default EurInfoContainer;
