import css from '../components/ProfileStyles.module.css';
import user from './user';
export default function Profile(props) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.image} src={props.avatar} alt="User avatar" />
        <p className={css.name}>{props.username}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>{props.objKeys[0]}</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>{props.objKeys[1]}</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>{props.objKeys[2]}</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
