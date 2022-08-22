import TableHead from './thead';
import TableBody from './tbody';
import PropTypes from 'prop-types';
import { type } from '@testing-library/user-event/dist/type';
export default function Transactions({ items }) {
  return (
    <table className="transaction-history">
      <TableHead headers={Object.keys(items[0])} />

      <TableBody transactions={items} />
    </table>
  );
}
TableHead.propTypes = {
  headers: PropTypes.array,
};
TableBody.propTypes = {
  transactions: PropTypes.array,
};
