import { Exchange } from "../utils/Exchange";

export default function ExchangeMoneyInput({
  country,
  basePrice,
}: {
  country: string;
  basePrice?: number;
}) {
  const { exMoney, onChange } = Exchange(basePrice);

  return (
    <div className="px-10 py-5">
      <input
        data-testid="exchangeInput"
        type="number"
        className="mr-4 appearance-none border-2 border-black rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        placeholder={`환전할 ${country}를 입력하세요.`}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      {country}
      <div className="flex mt-5">
        ▶︎{" "}
        <div data-testid="exMoney" className="break-words w-60 text-end">
          {exMoney} 원
        </div>
      </div>
    </div>
  );
}
