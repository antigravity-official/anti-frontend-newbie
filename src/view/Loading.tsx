// 사용자에게 보여지는 UI (환율 정보를 불러 오는동안 보여질 로딩창)
import "../Styles/Loading.css";

function Loading() {
  return (
    <div className="Loading">
      <h1 className="Loading-text">로딩중입니다...</h1>
      <div className="Loading-icon"></div>
    </div>
  );
}

export default Loading;
