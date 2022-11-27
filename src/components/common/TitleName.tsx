import styled from '@emotion/styled';

interface TitleNameProps {
  title: string;
}

const TitleName = ({ title }: TitleNameProps) => {
  return <TitleNameContainer>{title}</TitleNameContainer>;
};

export default TitleName;

const TitleNameContainer = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  border: 1rem;
  margin-right: 1rem;
  width: 10%;
`;
