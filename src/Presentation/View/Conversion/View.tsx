import React from 'react';
import useViewModel from './ViewModel';
import Input from '../Components/Input';
import Button from 'Presentation/View/Components/Button';
import DropDowns from 'Presentation/View/Components/DropDowns';

export default function ConvertCurrencyView() {
  const {
    error,
    isLoading,
    kindOfPrice,
    amount,
    onAmountChange,
    from,
    into,
    result,
    isReady,
    onConvert,
    price,
    onPriceChange,
    onReset,
    onSwitch,
    showResult,
    closeResult,
  } = useViewModel();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>서버에서 에러가 발생했어요!</div>;
  return (
    <div>
      <h1>Currency Converter</h1>
      <section className="from">
        <DropDowns label={'종류'} array={kindOfPrice} value={price} onChange={onPriceChange} />
        <Input
          label={from.name}
          amount={amount}
          onAmountChange={onAmountChange}
          onSubmit={onConvert}
          onKeyDown={closeResult}
        />
        <Button title={'convert'} onClick={onConvert} />
        <Button title={'reset'} onClick={onReset} />
        <Button title={'switch'} onClick={onSwitch} />
      </section>
      <section className="into">
        <span>결과({into.name})</span>
        <p>{showResult && isReady && result}</p>
        <p>{showResult && !isReady && '👾'}</p>
      </section>
    </div>
  );
}
