import { EurInfoContainerProps } from "../@types/EurDetailProps";

const EurInfoContainer = ({
  priceDetail,
}: {
  priceDetail: EurInfoContainerProps;
}) => {
  return (
    <article className="h-24 w-full">
      <p>1 유로 =</p>
      <div>
        <strong>{priceDetail.basePrice}원</strong>
        <span
          className={`${
            priceDetail.moneyState() === "▼" ? " text-red-500" : "text-blue-700"
          } ml-2`}
        >
          {priceDetail.moneyState()}
          {priceDetail.changePrice}원 ({priceDetail.percent()})
        </span>
        <p>
          <small>{priceDetail.exchangeDate()}</small>
        </p>
      </div>
    </article>
  );
};

export default EurInfoContainer;
