import './TransactionHistory.module.css';
import propTypes from 'prop-types';

const createColor = () => {
  const color = 'rgba(' + Math.round(Math.random() * 255) + ',' +
    Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + 0.5 + ')';

  return color;
}


export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: createColor() }}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} style={{ backgroundColor: createColor() }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string
};
