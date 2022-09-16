import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 500px;
  margin: 0 auto 20px auto;
  padding-bottom: 40px;
  text-align: center;
  background-color: ${props => props.theme.colors.backgroundUserColor};

  padding: ${props => props.theme.spacing(4)};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;

  h2 {
    margin-bottom: 16px;
    font-size: 30px;
  }
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.backgroundListColor};
`;
