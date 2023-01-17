import "./Loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner_background"></div>
      <div className="loading-spinner_content">
        <div className="loading-spinner_image">
          <img src="/spinner/icons8-iphone-spinner.gif" alt="spinner" />
        </div>
        <p className="loading-spinner_title"> 정보를 로딩중입니다.</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
