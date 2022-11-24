import ViewModel from '../ViewModel/ViewModel';

interface Props {
  viewModel: ViewModel;
}

const ExchangeInput = ({ viewModel }: Props) => {
  const { eurInfo, eur, krw } = viewModel.getAllEurInfo();

  return (
    <div>
      <input
        type={'number'}
        onChange={(e) => {
          viewModel.onChange(e.target.value, eurInfo.basePrice);
        }}
        value={eur}
      />
      유로 ▶︎
      <input value={krw} disabled />
    </div>
  );
};

export default ExchangeInput;
