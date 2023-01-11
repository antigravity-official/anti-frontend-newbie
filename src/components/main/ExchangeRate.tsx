import { EurInfoTypes } from '../../types/eurInfo';

type Props = Pick<EurInfoTypes, 'basePrice' | 'openingPrice' | 'changePrice'>;

const ExchangeRate = (props: Props) => {
  const { basePrice, openingPrice, changePrice } = props;

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {basePrice}
        {basePrice - openingPrice > 0 ? '▲' : '▼'}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </div>
    </>
  );
};

export default ExchangeRate;
