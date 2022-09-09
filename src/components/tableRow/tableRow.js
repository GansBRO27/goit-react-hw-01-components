import css from '../transactions/Transactions.module.css';
import PropTypes from 'prop-types';
export default function TableRow({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.row}>{type}</td>
      <td className={css.row}>{amount}</td>
      <td className={css.row}>{currency}</td>
    </tr>
  );
}
TableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
