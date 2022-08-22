import TableRow from './tableRow';
import PropTypes from 'prop-types';

export default function TableBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <TableRow
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </tbody>
  );
}
TableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
