export default function Exchange(props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  exchangePrice: number;
}) {
  const { onChange, exchangePrice } = props;
  return (
    <div>
      <input type="number" step={0.01} onChange={onChange} /> 유로 ▶︎
      <input
        disabled
        placeholder={
          exchangePrice ? Math.floor(exchangePrice).toLocaleString() : "0"
        }
      />
      원
    </div>
  );
}
