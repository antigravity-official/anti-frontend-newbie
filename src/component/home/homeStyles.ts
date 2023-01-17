import styled from "@emotion/styled";
import { IStylesProps } from "../../types/homeView";

export const Container = styled.section`
  margin: 0 auto;
  width: 500px;
`;

export const H1 = styled.h1`
  padding: 1rem 0;
  text-align: center;
  color: white;
`;

export const Main = styled.main`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
`;

export const InfoWrapper = styled.div`
  height: 180px;
  text-align: center;
`;

export const InfoTopBox = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid darkgray;
  font-size: 2rem;

  span {
    font-size: 1.5rem;
    color: ${(props: IStylesProps) => (props.exchangeUpDown ? "red" : "blue")};
  }

  div {
    font-size: 1rem;
    color: gray;
  }
`;

export const InfoBottomBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export const calculationWrapper = styled.div`
  padding-top: 1rem;
  border-top: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  input {
    text-align: right;
    font-size: large;
    width: 130px;
  }
`;
