import { DashBoard, InputBox } from '../components/UI';
import { IViewModel } from '../types';
import styled from "styled-components";

function CurrencyView({
  viewModel,
}: {
  viewModel: IViewModel;
  
}) {
  return (
    <Wrapper>
      <DashBoard
        basePrice={viewModel.info.basePrice}
        openingPrice={viewModel.info.openingPrice}
        changePrice={viewModel.info.changePrice}
        cashBuyingPrice={viewModel.info.cashBuyingPrice}
        cashSellingPrice={viewModel.info.cashSellingPrice}
        ttSellingPrice={viewModel.info.ttSellingPrice}
        ttBuyingPrice={viewModel.info.ttBuyingPrice}
      />
      <InputBox viewModel={viewModel}/>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CurrencyView;
