import TableHead from '../thead/thead';
import TableBody from '../tbody/tbody';
import PropTypes from 'prop-types';

export default function Transactions({ items }) {
  return (
    <table className="transaction-history">
      <TableHead headers={Object.keys(items[0])} />

      <TableBody transactions={items} />
    </table>
  );
}
Transactions.propTypes = {
  items: PropTypes.array,
};
