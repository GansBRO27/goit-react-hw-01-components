import css from '../components/Transactions.module.css';
export default function TableRow({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.row}>{type}</td>
      <td className={css.row}>{amount}</td>
      <td className={css.row}>{currency}</td>
    </tr>
  );
}
