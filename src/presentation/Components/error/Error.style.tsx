import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.palette["point"]};
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;
