export default function ExchangeMoneyInput({ country }: { country: string }) {
  return (
    <div className="border-2 border-black rounded-md px-10 py-5">
      <input
        className="border-2 border-black rounded-md px-3 py-1 focus:outline-none"
        placeholder={`환전할 ${country}를 입력하세요.`}
      />{" "}
      {country} ▶︎ <input disabled /> 원
    </div>
  );
}
