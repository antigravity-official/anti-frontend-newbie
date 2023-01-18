import React from "react";
import * as S from "./Arrow.style";

function Arrow({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return <S.ArrowIcon color={color}>{children}</S.ArrowIcon>;
}

export default Arrow;
