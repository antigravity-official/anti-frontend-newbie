import React, { useEffect, useState } from 'react';
import useConvert from '../../../hooks/useConvert';
import ConvertCurrency from 'lib/ConvertCurrency';
import trimAmount from '../../../lib/trimAmount';
import useInput from '../../../hooks/useInput';
import useGetConversionInfoUseCase from '../../../Domain/UserCase/Conversion/useGetConversionInfoUseCase';

export default function useViewModel() {
  const { data, isLoading, error } = useGetConversionInfoUseCase();
  const [kindOfPrice, , , setKindOfPrice] = useInput<{ name: string; data: number }[]>([]);
  const [amount, onAmountChange, onAmountReset] = useInput(1);
  const [price, onPriceChange, onPriceReset, setPrice] = useInput(1);
  const { from, into, result, isReady, handleConvert, handleReset, handleSwitch } = useConvert({
    from: {
      name: 'eur',
      locale: 'en',
      unit: '유로',
      convert: (amount: number, price: number) => ConvertCurrency.eurToKrw(amount, price),
      format: trimAmount(2),
    },
    into: {
      name: 'krw',
      locale: 'ko',
      unit: '원',
      convert: (amount: number, price: number) => ConvertCurrency.krwToEur(amount, price),
      format: trimAmount(0),
    },
  });
  const [showResult, setShowResult] = useState(false);

  const onSwitch = () => handleSwitch();

  const onReset = () => {
    handleReset();
    onAmountReset();
    onPriceReset();
  };

  const onConvert = () => {
    handleConvert(amount, price);
    setShowResult(true);
  };

  const closeResult = () => setShowResult(false);

  useEffect(() => {
    if (data) {
      const prices = [
        { name: '기본', data: data.basePrice },
        { name: '살 때', data: data.cashBuyingPrice },
        { name: '팔 때', data: data.cashSellingPrice },
        { name: '보낼 때', data: data.ttSellingPrice },
        { name: '받을 때', data: data.ttBuyingPrice },
      ];

      setKindOfPrice(prices);
      setPrice(prices[0].data);
    }
  }, [data, setKindOfPrice]);

  return {
    data,
    error,
    isLoading,
    kindOfPrice,
    amount,
    onAmountChange,
    price,
    onPriceChange,
    from,
    into,
    result,
    isReady,
    onSwitch,
    onReset,
    onConvert,
    showResult,
    closeResult,
  };
}
