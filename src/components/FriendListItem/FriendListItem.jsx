import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard isOnline={isOnline}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
