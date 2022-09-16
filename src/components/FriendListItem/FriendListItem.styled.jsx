import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 300px;
  margin: 0 auto 20px auto;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(8)};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  font-size: 24px;

  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${({isOnline, theme}) => isOnline ? theme.colors.green : theme.colors.red};
  }

  img {
    margin-right: 20px;
  }

  p {
    font-size: 24px;
  }
`;
