import ViewModel from '../ViewModel/ViewModel';
import { Flex } from '../styles/common';
import styled from '@emotion/styled';

interface Props {
  viewModel: ViewModel;
}

const EurInfo = ({ viewModel }: Props) => {
  const { eurInfo, updownMark, changeRate } = viewModel.getAllEurInfo();

  return (
    <Flex
      direction='column'
      margin='60px 0px 0px 0px'
      border='1px solid white'
      padding='50px'
    >
      <Title>
        <h1>환율기준 (1 유로)</h1>
      </Title>
      <MainInfo>
        {eurInfo.basePrice}원{updownMark}
        {eurInfo.changePrice}원 ({changeRate}%)
      </MainInfo>
      <Flex direction='column'>
        <DetailInfo>
          <span>살때 </span>:<span> {eurInfo.cashBuyingPrice}원</span>
        </DetailInfo>
        <DetailInfo>
          <span>팔때 </span>:<span> {eurInfo.cashSellingPrice}원</span>
        </DetailInfo>
        <DetailInfo>
          <span>보낼때 </span>:<span>{eurInfo.ttSellingPrice}원</span>
        </DetailInfo>
        <DetailInfo>
          <span>받을때 </span>:<span> {eurInfo.ttBuyingPrice}원</span>
        </DetailInfo>
      </Flex>
    </Flex>
  );
};

export default EurInfo;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #00df9a;
`;

const MainInfo = styled.div`
  color: #bbbec3;
  font-size: 18px;
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  border: 1px solid white;
  border-radius: 6px;
  padding: 10px;
  width: 170px;
  font-size: 18px;
  color: #bbbec3;
  & > span {
    display: flex;
    width: 100%;
    text-align: end;
    justify-content: end;
    align-items: center;
  }
`;
