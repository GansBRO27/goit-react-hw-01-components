import css from '../components/FriendsStyles.module.css';
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
