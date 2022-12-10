import React from "react";
import styled from "styled-components";

const StyledPriceComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 1rem;

  width: 10rem;
  height: 10rem;
`;

const PriceComponent = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <StyledPriceComponent>{children}</StyledPriceComponent>;
};

export default PriceComponent;
