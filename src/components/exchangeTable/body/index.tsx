import { IEurInfo } from '../../../types/eurInfo';
import { UpDownPrice } from '../style';

interface IProps {
  listInfo: IEurInfo;
}

const MathCeil = (number: number | undefined) => {
  return Math.ceil(Number(number));
};

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

  const changePricePercent = Math.ceil((MathCeil(changePrice) / MathCeil(basePrice)) * 10000) / 100;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{currencyName}</td>
        <td>{MathCeil(basePrice).toLocaleString()}</td>
        <UpDownPrice basePrice={MathCeil(basePrice)} openingPrice={MathCeil(openingPrice)}>
          {MathCeil(basePrice) - MathCeil(openingPrice) > 0
            ? '▲'
            : MathCeil(basePrice) - MathCeil(openingPrice) < 0
            ? '▼'
            : ''}
          {MathCeil(changePrice).toLocaleString()}원 ({changePricePercent}%)
        </UpDownPrice>
        <td>{MathCeil(cashBuyingPrice).toLocaleString()}</td>
        <td>{MathCeil(cashSellingPrice).toLocaleString()}</td>
        <td>{MathCeil(ttSellingPrice).toLocaleString()}</td>
        <td>{MathCeil(ttBuyingPrice).toLocaleString()}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
