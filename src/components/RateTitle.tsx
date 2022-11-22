export default function RateTitle({ country }: { country: string }) {
  return <div className="text-lg text-center">환율기준 (1 {country})</div>;
}
