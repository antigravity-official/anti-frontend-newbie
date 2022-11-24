import ViewModel from '../ViewModel/ViewModel';

interface Props {
  viewModel: ViewModel;
}

const ExchangeInput = ({ viewModel }: Props) => {
  const { data, eur, krw } = viewModel.getEurInfo();

  return (
    <div>
      <input
        type={'number'}
        onChange={(e) => {
          viewModel.onChange(e.target.value, data.basePrice);
        }}
        value={eur}
      />
      유로 ▶︎
      <input value={krw} disabled />
    </div>
  );
};

export default ExchangeInput;
