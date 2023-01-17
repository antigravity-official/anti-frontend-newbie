import styled from "styled-components";

export const Wrapper = styled.section<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? "flex" : "block")};
  justify-content: ${({ isLoading }) => (isLoading ? "center" : "inherit")};
  align-items: ${({ isLoading }) => (isLoading ? "center" : "inherit")};

  h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0;

    svg {
      font-size: 2rem;
    }
  }

  section {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    section {
      width: 100%;
    }
  }
`;

export const ChangeToEuro = styled.section`
  h2 {
    margin-bottom: 50px;
  }

  > p {
    margin-bottom: 50px;
    text-align: center;
    color: red;
  }

  .changeToEuro__input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    p {
      font-size: 2rem;
    }
  }
`;
