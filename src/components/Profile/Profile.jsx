import PropTypes from 'prop-types';
import {
  Card,
  UserInfoContainer,
  UserInfo,
  ProfileStats,
  StatItem,
} from './Profile.styled';

export const Profile = props => {
  const { userName, tag, location, avatar, stats } = props;

  return (
    <Card>
      <UserInfoContainer>
        <img src={avatar} alt="User avatar" />
        <UserInfo>{userName}</UserInfo>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserInfoContainer>

      <ProfileStats>
        {Object.keys(stats).map(key => (
          <StatItem key={key}>
            <span>{key}</span>
            <span>{stats[key]}</span>
          </StatItem>
        ))}
      </ProfileStats>
    </Card>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
