import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  padding: 30px 0;

  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>유럽 환율</h1>
    </HeaderContainer>
  );
};
