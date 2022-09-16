import PropTypes from 'prop-types';
import { Card, UserData, ProfileStats } from './Profile.styled';

export const Profile = props => {
  const { userName, tag, location, avatar, followers, views, likes } = props;

  return (
    <Card>
      <UserData>
        <img src={avatar} alt="User avatar" />
        <p>{userName}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </UserData>

      <ProfileStats>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ProfileStats>
    </Card>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
