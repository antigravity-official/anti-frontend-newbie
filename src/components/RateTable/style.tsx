import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid rgba(224, 224, 224, 1);
      white-space: nowrap;
      padding: 10px;
    }

    th {
      font-weight: 600;
      font-size: 1.02rem;
      background-color: ${({ theme }) => theme.background.point};
    }

    td {
      &.blue {
        color: blue;
      }

      &.red {
        color: red;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    overflow-x: scroll;
  }
`;
