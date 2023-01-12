import useInputViewModel from "../viewModel/useInputViewModel";

const InputContent = () => {
  const { euroValue, onChangeEuroValue, KWT } = useInputViewModel();

  return (
    <>
      <input
        type="text"
        value={euroValue}
        onChange={(e) => onChangeEuroValue(e.target.value)}
      />
      유로 ▶︎
      <input disabled value={KWT} />원
    </>
  );
};

export default InputContent;
