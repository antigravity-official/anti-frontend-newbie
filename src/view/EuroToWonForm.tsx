import styled from "@emotion/styled";
import { useForm } from "./viewModels/useForm";

interface Props {
  basePrice: number;
}

export default function EuroToWonForm({ basePrice }: Props) {
  const { eur, krw, onChangeEur } = useForm(basePrice);
  return (
    <Wrap>
      <Left>
        <Input type="number" value={eur} onChange={(e) => onChangeEur(e)} />
        <EurLogo>
          <Icon />
          <span>EUR</span>
        </EurLogo>
      </Left>
      <Right>▶︎ {krw} 원</Right>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  width: 250px;
  height: 100%;
  padding: 13px 16px 11px;
  font-size: 22px;
  box-sizing: border-box;
`;

const EurLogo = styled.div`
  display: flex;
  align-items: center;
  background-color: #37517e;
  height: 100%;
  padding: 13px 16px 11px;
  box-sizing: border-box;
  span {
    font-weight: bold;
    font-size: 17px;
    color: white;
    margin-left: 3px;
  }
`;
const Icon = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url("https://wise.com/public-resources/assets/flags/rectangle/eur.png");
  background-position: center;
`;

const Right = styled.div``;
