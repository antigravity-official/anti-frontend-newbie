import { NumericFormat } from "react-number-format";
interface Props {
  exchangeEurToKrw(krw: number): number;
  unformatCurrInput(e: React.ChangeEvent<HTMLInputElement>): number;
  onChange(value: number): void;
  currInput: number;
}

export const CurrencyConverterView = ({
  exchangeEurToKrw,
  currInput,
  unformatCurrInput,
  onChange,
}: Props) => {
  return (
    <>
      <NumericFormat
        onChange={(e) => onChange(exchangeEurToKrw(unformatCurrInput(e)))}
        decimalScale={2}
        thousandSeparator=","
      ></NumericFormat>
      유로 ▶︎
      <NumericFormat
        value={currInput}
        decimalScale={0}
        thousandSeparator=","
        disabled
      ></NumericFormat>
      원
    </>
  );
};
