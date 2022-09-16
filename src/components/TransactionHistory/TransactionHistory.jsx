import PropTypes from 'prop-types';
import { TransactionTable } from './TransactionHistory.styled';
import { Transaction } from '../Transaction/Transaction';

export const TransationHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransationHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired, 
    currency: PropTypes.string.isRequired, 
  })).isRequired
};
