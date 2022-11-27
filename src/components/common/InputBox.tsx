import styled from '@emotion/styled';

interface InputBoxProps {
  children: React.ReactNode;
}

const InputBox = ({ children }: InputBoxProps) => {
  return <InputBoxContainer>{children}</InputBoxContainer>;
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;
