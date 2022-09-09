import TableRow from '../tableRow/tableRow';
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

TableBody.propTypes = {
  transactions: PropTypes.array,
};
