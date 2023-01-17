import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > label {
    font-weight: 600;
  }

  input {
    width: 70%;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #000;
    font-size: 1.2rem;

    &:disabled {
      color: #fff;
    }
  }
`;
