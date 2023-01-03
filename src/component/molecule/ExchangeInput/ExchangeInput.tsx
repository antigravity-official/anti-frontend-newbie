import { ChangeEventHandler, useState } from "react";

interface Props {
  exchangeRate: number;
  fromCurrencyUnit: string;
  toCurrencyUnit: string;
  fromCurrencyFormatter: (amount: string) => string;
  toCurrencyFormatter: (amount: string) => string;
}

type AmountState = string;

const ExchangeInput = ({
  exchangeRate,
  fromCurrencyUnit,
  toCurrencyUnit,
  fromCurrencyFormatter,
  toCurrencyFormatter,
}: Props) => {
  const [amount, setAmount] = useState<AmountState>("0");

  const exchange = (amount: number) => amount * exchangeRate;

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
