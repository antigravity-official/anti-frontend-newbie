import { IEurInfo } from '../../../types/eurInfo';
import { UpDownPrice } from '../style';

interface IProps {
  listInfo: IEurInfo;
}

const TableBody = ({ listInfo }: IProps) => {
  const {
    name,
    currencyName,
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = listInfo;

  const base = Math.ceil(Number(basePrice));
  const opening = Math.ceil(Number(openingPrice));
  const change = Math.ceil(Number(changePrice));
  const cashBuying = Math.ceil(Number(cashBuyingPrice));
  const cashSelling = Math.ceil(Number(cashSellingPrice));
  const ttSelling = Math.ceil(Number(ttSellingPrice));
  const ttBuying = Math.ceil(Number(ttBuyingPrice));
  const changePricePercent = Math.ceil((change / base) * 10000) / 100;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{currencyName}</td>
        <td>{base.toLocaleString()}</td>
        <UpDownPrice basePrice={base} openingPrice={opening}>
          {base - opening > 0 ? '▲' : base - opening < 0 ? '▼' : ''}
          {change.toLocaleString()}원 ({changePricePercent}%)
        </UpDownPrice>
        <td>{cashBuying.toLocaleString()}</td>
        <td>{cashSelling.toLocaleString()}</td>
        <td>{ttSelling.toLocaleString()}</td>
        <td>{ttBuying.toLocaleString()}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
