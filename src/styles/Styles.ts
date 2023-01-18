import styled from 'styled-components';

export const AppCss = styled.div`
    height: 97vh;
    margin: 0 auto;
    width: 35%;
    background: white;
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    @media all and (max-width:490px) {
      width: 100%;
    }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 1rem;
  text-align: center;
`;

// ShowPrice.tsx
export const Block1 = styled.div`
  width: 100%;
  text-align: center;
  height: 23vh;
  margin-top: 8%;
  font-size: 1.2em;
  color: #343a40;
  border-bottom: 1px solid #e9ecef;
  font-family: 'Nanum Gothic', sans-serif;
  .Title{
    margin-bottom: 6%;
    font-size: 1.6em;
    font-weight: 600;
    @media all and (max-width:490px) {
      margin-bottom: 10%;
    }
  }
  .Content{
    margin-bottom: 1.4%;
  }
  .up{
    color: red;
  }
  .down{
    color: blue;    
  }
  @media all and (max-width:490px) {
    margin-top: 10%;
  }

`;

// ExchangeMoney.tsx
export const Block2 = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  height: 35vh;
  font-size: 1.3em;
  color: #343a40;
  border-bottom: 1px solid #e9ecef;
  font-family: 'Nanum Gothic', sans-serif;
  .Center{
    margin-top: 9.5%;
     @media all and (max-width:490px) {
      margin-top: 18%;
    }
  }
  .Content{
    margin-bottom: 4%;
  }
`;

// ComputePrice.tsx
export const Block3 = styled.div`
  width: 100%;
  text-align: center;
  height: 25vh;
  font-size: 1em;
  color: #343a40;
  font-family: 'Nanum Gothic', sans-serif;
  .inputMain{
    margin-top: 18%;
    width: 30%;
    height: 20%;
    @media all and (max-width:490px) {
      margin-top: 28%;
    }
  }
`;