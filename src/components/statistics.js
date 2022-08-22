import css from '../components/StatisticsStyles.module.css';
export default function Statistics(props) {
  return (
    <section className="statistics">
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className="label">{props.stats[0].label}</span>
          <span className="percentage">{props.stats[0].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{props.stats[1].label}</span>
          <span className="percentage">{props.stats[1].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{props.stats[2].label}</span>
          <span className="percentage">{props.stats[2].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{props.stats[3].label}</span>
          <span className="percentage">{props.stats[3].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className="label">{props.stats[4].label}</span>
          <span className="percentage">{props.stats[4].percentage}%</span>
        </li>
      </ul>
    </section>
  );
}
