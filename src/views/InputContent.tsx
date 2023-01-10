import useInputViewModel from "../viewModel/useInputViewModel";

const InputContent = () => {
  const { euroValue, onChangeEuroValue, KWT } = useInputViewModel();

  return (
    <>
      <input
        type="text"
        value={euroValue}
        onChange={(e) => onChangeEuroValue(e)}
      />
      유로 ▶︎
      <input disabled value={KWT} />원
    </>
  );
};

export default InputContent;
