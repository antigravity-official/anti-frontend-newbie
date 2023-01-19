import useViewModel from './ViewModel';
import Input from '../../Components/Input';
import ActionButton from 'Presentation/Components/ActionButton';
import DropDowns from 'Presentation/Components/DropDowns';
import Layout from 'Presentation/Components/Layout';
import { RxReset } from 'react-icons/rx';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { RiGradienterLine } from 'react-icons/ri';
import SubmitButton from '../../Components/SubmitButton';
import Loading from 'Presentation/Components/Loading';
import Error from 'Presentation/Components/Error';

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
    setPrice,
    onReset,
    onSwitch,
    showResult,
    closeResult,
  } = useViewModel();

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <Layout title="한국와 유럽의 환율을 알아보세요!">
      <p className="flex items-center mb-2">
        <span className="text-4xl">{from.name}</span>
        <span className="mx-4"> ➡️ </span>
        <span className="text-4xl">{into.name}</span>
      </p>
      <DropDowns
        label={'가격 정보'}
        summary={`${from.unit}에서 ${into.unit}(으)로`}
        array={kindOfPrice}
        state={price}
        setState={setPrice}
      />
      <section className="flex flex-col items-center">
        <Input
          label={from.unit}
          amount={amount}
          onAmountChange={onAmountChange}
          onSubmit={onConvert}
          onKeyDown={closeResult}
          placeholder="금액을 입력하세요"
        />
        <div className="mt-4">
          <ActionButton title={'초기화'} icon={RxReset} onClick={onReset} />
          <ActionButton title={'유로 🔁 원'} icon={HiOutlineSwitchVertical} onClick={onSwitch} />
        </div>
        <div className="mt-10">
          <SubmitButton
            title={'변환하기'}
            processingTitle={'변환 중...'}
            icon={RiGradienterLine}
            processing={!isReady}
            onClick={onConvert}
          />
        </div>
      </section>
      {showResult && isReady && (
        <section className="relative border-dotted border-gray-300 border-t-2 w-full  my-5 pt-16">
          <img src="/complete.png" alt="complete.png" className="w-32 absolute top-3 left-5 opacity-80" />
          <p className="text-center text-3xl z-10">{result}</p>
        </section>
      )}
    </Layout>
  );
}
