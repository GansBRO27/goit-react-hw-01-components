import FriendListItem from './friendListItem';
import css from '../components/FriendsStyles.module.css';
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem
          key={name}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
