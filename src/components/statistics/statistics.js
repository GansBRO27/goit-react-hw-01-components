import css from '../statistics/StatisticsStyles.module.css';
import PropTypes from 'prop-types';
export default function Statistics(props) {
  const { stats, title } = props;
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        <li className={css.item}>
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{stats[4].label}</span>
          <span className="percentage">{stats[4].percentage}%</span>
        </li>
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
