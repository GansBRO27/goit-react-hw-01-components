import css from '../profile/ProfileStyles.module.css';
import PropTypes from 'prop-types';
export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.image} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>{props.objKeys[0]}</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>{props.objKeys[1]}</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>{props.objKeys[2]}</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  objKeys: PropTypes.array,
};
