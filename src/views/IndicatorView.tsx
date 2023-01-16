// 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가
// css로 꾸미기
import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

export const IndicatorView = () => {
  return <div>로딩중...
  </div>;
};

export default IndicatorView;