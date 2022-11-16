import { Container, SubTitle, Table } from './style';
import TableBody from './body';
import { IEurInfo } from '../../types/eurInfo';

interface IProps {
  listInfo: IEurInfo;
}

const Exchange = ({ listInfo }: IProps) => {
  return (
    <Container>
      <SubTitle>환율기준 (1 {listInfo.currencyName})</SubTitle>

      <Table>
        <thead>
          <tr>
            <th rowSpan={2}>국가명</th>
            <th rowSpan={2}>통화</th>
            <th rowSpan={2}>매매기준율</th>
            <th rowSpan={2}>전일대비</th>
            <th colSpan={2}>현찰</th>
            <th colSpan={2}>송금</th>
          </tr>
          <tr>
            <th>사실 때</th>
            <th>파실 때</th>
            <th>보내실 때</th>
            <th>받으실 때</th>
          </tr>
        </thead>

        <TableBody listInfo={listInfo} />
      </Table>
    </Container>
  );
};

export default Exchange;
