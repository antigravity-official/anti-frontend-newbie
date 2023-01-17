import { Container } from "./style";
import { useAppSelector } from "hooks/useStore";

export const RateTable = () => {
  const {
    basePrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    openingPrice,
    ttBuyingPrice,
    ttSellingPrice,
  } = useAppSelector(({ euroInfo }) => euroInfo.info);
  const currenRateTableData = {
    title: ["매매기준율", "전일대비", "현찰", "송금"],
    subTitle: ["살때", "팔때", "보낼때", "받을때"],
  };
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {currenRateTableData.title.map((title, idx) =>
              idx === 0 || idx === 1 ? (
                <th rowSpan={2} align="center" key={idx}>
                  {title}
                </th>
              ) : (
                <th colSpan={2} align="center" key={idx}>
                  {title}
                </th>
              )
            )}
          </tr>
          <tr>
            {currenRateTableData.subTitle.map((subTitle, idx) => (
              <th align="center" key={idx}>
                {subTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              align="center"
              className={basePrice - openingPrice > 0 ? "red" : "blue"}
            >
              {basePrice}
            </td>
            <td
              align="center"
              className={basePrice - openingPrice > 0 ? "red" : "blue"}
            >
              <span>{basePrice - openingPrice > 0 ? "▲" : "▼"}</span>
              {changePrice}원 ({(changePrice / basePrice) * 100}%)
            </td>
            <td align="center"> {cashBuyingPrice}</td>
            <td align="center">{cashSellingPrice}</td>
            <td align="center">{ttSellingPrice}</td>
            <td align="center">{ttBuyingPrice}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
