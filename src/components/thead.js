import css from '../components/Transactions.module.css';
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
