import "./Loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__background"></div>
      <div className="loading-spinner__content">
        <div className="loading-spinner__image">
          <img src="/spinner/icons8-iphone-spinner.gif" alt="spinner" />
        </div>
        <p className="loading-spinner__title"> 정보를 로딩중입니다.</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
