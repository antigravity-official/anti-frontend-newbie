import styled from 'styled-components';
interface UpDownPriceProps {
  basePrice?: number;
  openingPrice?: number;
}
export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
`;
export const SubTitle = styled.p`
  width: 100%;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  color: ${({ theme }) => theme.colors.B60};
  margin-bottom: 5px;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    margin: auto;

    th {
      border: 1px solid ${({ theme }) => theme.colors.B40};
      font-size: ${({ theme }) => theme.fontSize.SMALL};
      color: ${({ theme }) => theme.colors.B100};
      font-weight: 600;
      text-align: center;
      margin: auto;
      padding: 8px 10px;
    }
  }

  tbody {
    tr {
      &:first-of-type td {
        padding: 12px 10px 0;
      }
      td {
        text-align: center;
        padding: 8px 10px 0;
      }
    }
  }
`;

export const UpDownPrice = styled.td`
  color: ${({ basePrice, openingPrice }: UpDownPriceProps) =>
    Number(basePrice) - Number(openingPrice) > 0
      ? '#0f33ff'
      : Number(basePrice) - Number(openingPrice) < 0
      ? '#ff0f33'
      : 'gray'};
`;
