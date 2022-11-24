import { useExchange } from "../hooks/useExchange";

const ExchangeInput = ({ basePrice }: { basePrice: number }) => {
  const { exchange, exchangeEurToKrw, Krw } = useExchange(basePrice);
  return (
    <section>
      <input
        type="text"
        onChange={(e) => exchangeEurToKrw(e.currentTarget.value)}
        value={exchange}
      />
      유로 ▶︎ <input disabled value={Krw} /> 원
    </section>
  );
};

export default ExchangeInput;
