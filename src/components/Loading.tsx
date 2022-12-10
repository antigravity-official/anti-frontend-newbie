import { ReactComponent as SpinnerIcon } from "../assets/icon/spinner.svg";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <SpinnerIcon
          width="80px"
          heigth="80px"
          fill="#fff"
          className="animate"
        />
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loading;
