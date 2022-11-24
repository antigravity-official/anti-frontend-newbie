import { useExchange } from "../hooks/useExchange";
import Input from "./common/Input";
import InputBox from "./common/InputBox";

const ExchangeInput = ({ basePrice }: { basePrice: number }) => {
  const { exchange, exchangeEurToKrw, Krw } = useExchange(basePrice);
  return (
    <article className="w-full space-y-4 text-center">
      <InputBox>
        <Input
          type="text"
          onChange={(e) => exchangeEurToKrw(e.currentTarget.value)}
          value={exchange}
          autoFoucs={true}
        />
        <span className="exChangeSpan">유로</span>
      </InputBox>
      <InputBox>
        <Input type="text" disabled={true} value={Krw} />
        <span className="exChangeSpan">대한민국 원</span>
      </InputBox>
    </article>
  );
};

export default ExchangeInput;
