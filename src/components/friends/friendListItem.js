import css from './FriendsStyles.module.css';
import PropTypes from 'prop-types';
export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={css.item}>
      {isOnline !== true ? (
        <span className={css.statusRed}></span>
      ) : (
        <span className={css.statusGreen}></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
