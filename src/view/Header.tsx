import styled from "@emotion/styled";
import { TodayExchangeRate } from "../type";

export default function Header({
  basePrice,
  openingPrice,
  changePrice,
}: TodayExchangeRate) {
  return (
    <Wrap>
      <span>
        {basePrice}
        {basePrice - openingPrice > 0 && "▲"}
        {basePrice - openingPrice < 0 && "▼"}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </span>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 2px solid #040507;
  padding: 10px;
  span {
    font-size: 20px;
  }
`;
