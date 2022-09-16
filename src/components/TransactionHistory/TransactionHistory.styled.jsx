import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 90%;
  margin: 0 auto 20px auto;
  border: 5px solid ${props => props.theme.colors.white};
  border-top: 5px solid ${props => props.theme.colors.white};
  border-bottom: 3px solid ${props => props.theme.colors.white};
  border-collapse: collapse;
  outline: 3px solid ${props => props.theme.colors.tableColor};
  font-size: 30px;
  background: ${props => props.theme.colors.white} !important;

  th {
    font-weight: bold;
    padding: 7px;
    background: ${props => props.theme.colors.tableColor};
    border: none;
    text-align: left;
    font-size: 24px;
    border-top: 3px solid ${props => props.theme.colors.white};
    border-bottom: 3px solid ${props => props.theme.colors.tableColor};
  }
  td {
    padding: 7px;
    border: none;
    border-top: 3px solid ${props => props.theme.colors.white};
    border-bottom: 3px solid ${props => props.theme.colors.white};
    font-size: 24px;
  }
  tbody tr:nth-of-type(even) {
    background: ${props => props.theme.colors.tableRowColor} !important;
  }
`;
