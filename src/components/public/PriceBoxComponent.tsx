import React from "react";
import styled from "styled-components";
import { JsxType } from "../../types/types";

const StyledPriceBoxComponent = styled.div`
  display: flex;
  justify-content: center;
`;

const PriceBoxComponent = ({ children }: JsxType) => {
  return <StyledPriceBoxComponent>{children}</StyledPriceBoxComponent>;
};

export default PriceBoxComponent;
