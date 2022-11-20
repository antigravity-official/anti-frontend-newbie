import React from "react";
import * as S from "./Loading.styled";

const Loading = (): React.ReactElement => {
  return (
    <S.Background>
      <S.LoadingText>환율 정보 로딩 중...</S.LoadingText>
    </S.Background>
  );
};

export default Loading;
