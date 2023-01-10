import InputViewModel from "../viewModel/InputViewModel";

const InputContent = () => {
  const { eurValue, onChangeEurValue, KWT } = InputViewModel();

  return (
    <>
      <input
        type="text"
        value={eurValue}
        onChange={(e) => onChangeEurValue(e)}
      />
      유로 ▶︎
      <input disabled value={KWT()} />원
    </>
  );
};

export default InputContent;
