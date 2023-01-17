import { Header } from "components";
import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.main`
  padding: 30px 30px 100px;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
