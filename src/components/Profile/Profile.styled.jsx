import styled from '@emotion/styled';

export const Card = styled.div`
  max-width: 400px;
  margin: 0 auto 20px auto;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.backgroundUserColor};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  text-align: center;

  display: flex;
  flex-direction: column;
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  padding-bottom: 16px;

  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const UserInfo = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }

  :nth-of-type(1) {
    font-size: 30px;
  }
`
export const ProfileStats = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  background-color: ${props => props.theme.colors.backgroundListColor};
`;

export const StatItem = styled.li`
    flex-basis: calc(100% / 3);
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.spacing(2)};
    border: 1px dotted ${props => props.theme.colors.secondaryGrey};

  & span:first-of-type {
    font-size: 20px;
  }
`