import React from "react";
import styled from "styled-components";
import { JsxType } from "../../types/types";

const StyledFlexComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const FlexComponent = ({ children }: JsxType) => {
  return <StyledFlexComponent>{children}</StyledFlexComponent>;
};

export default FlexComponent;
