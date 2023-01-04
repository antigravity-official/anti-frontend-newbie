import { ChangeEventHandler, useState } from "react";

interface Props {
  fromCurrencyUnit: string;
  toCurrencyUnit: string;
  fromCurrencyFormatter: (amount: string) => string;
  toCurrencyFormatter: (amount: string) => string;
  exchange: (amount: number) => number;
}

type AmountState = string;

const ExchangeInput = ({
  fromCurrencyUnit,
  toCurrencyUnit,
  fromCurrencyFormatter,
  toCurrencyFormatter,
  exchange,
}: Props) => {
  const [amount, setAmount] = useState<AmountState>("0");

  const handleFromCurrencyChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setAmount(fromCurrencyFormatter(event.target.value));

  return (
    <>
      <input type="text" value={amount} onChange={handleFromCurrencyChange} />
      {" " + fromCurrencyUnit}
      {" ▶︎ "}
      <input
        disabled
        value={toCurrencyFormatter(String(exchange(parseFloat(amount))))}
      />
      {" " + toCurrencyUnit}
    </>
  );
};

export default ExchangeInput;
