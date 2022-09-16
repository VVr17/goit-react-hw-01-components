import styled from '@emotion/styled';

export const StatElement = styled.li`
  flex-basis: calc(100% / 4);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing(2)};
  border: 1px dotted ${props => props.theme.colors.secondaryGrey};
  font-size: 24px;

  & span:first-of-type {
    font-weight: 700;
  }
`;
