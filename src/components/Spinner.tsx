import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <BeatLoader color="#36d7b7" size="20px" />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  margin: 10px;
`;
