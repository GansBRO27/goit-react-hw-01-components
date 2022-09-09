import css from '../transactions/Transactions.module.css';
import PropTypes from 'prop-types';
export default function TableHead({ headers }) {
  return (
    <thead>
      <tr className={css.hats}>
        <th>{headers[1]}</th>
        <th>{headers[2]}</th>
        <th>{headers[3]}</th>
      </tr>
    </thead>
  );
}
TableHead.propTypes = {
  headers: PropTypes.array,
};
