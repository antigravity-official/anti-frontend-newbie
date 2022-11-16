import { ChangeEvent, useState } from 'react';
import { Exchange, Input, Loading } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { InputWrapper, Wrapper } from './style';

const HomePage = () => {
  const { eurInfo, isLoading } = useFetch();
  const [exchangeValue, setExchangeValue] = useState(1);

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setExchangeValue(value);
  };

  const exchangeEurToKrw = (krw: number) => Math.round(krw * Number(eurInfo.basePrice));

  if (!isLoading) return <Loading />;

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="number"
          text={eurInfo.currencyName}
          onChange={onChangeInputValue}
          defaultValue="1"
        />
        ▶︎
        <Input
          value={
            exchangeValue === 1
              ? Math.round(Number(eurInfo.basePrice)).toLocaleString()
              : exchangeEurToKrw(exchangeValue).toLocaleString()
          }
          disabled
          text="원"
        />
      </InputWrapper>
      <hr />
      <Exchange listInfo={eurInfo} />
    </Wrapper>
  );
};

export default HomePage;
