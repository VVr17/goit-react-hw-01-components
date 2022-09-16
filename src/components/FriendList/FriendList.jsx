import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friends } from "./FriendList.styled";

export const FriendList = ({friends}) => {
  return (
    <Friends>
      {friends.map(({avatar, name, isOnline, id}) => 
        <FriendListItem key={id} avatar={avatar} isOnline={isOnline} name={name} />
      )}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    isOnline: PropTypes.bool.isRequired, 
    id: PropTypes.number.isRequired,
  }))
}
