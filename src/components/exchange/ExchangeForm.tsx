import useExchange from './hooks/useExchange';

type ExchangeFormProps = {
  basePrice: number;
};

const ExchangeForm = ({ basePrice }: ExchangeFormProps) => {
  const { eur, krw, onChange } = useExchange(basePrice);
  return (
    <>
      <input type="number" min={0} onChange={onChange} value={eur} /> 유로 ▶︎
      <input type="text" readOnly value={Math.floor(krw).toLocaleString()} />원
    </>
  );
};

export default ExchangeForm;
