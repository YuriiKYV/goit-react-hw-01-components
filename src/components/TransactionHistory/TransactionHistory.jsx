import { PropTypes } from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr className={css.hero}>
                    <th className={css.heroType}>Type</th>
                    <th className={css.heroAmount}>Amount</th>
                    <th className={css.heroCurrency}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.list}>
                {items.map(({id, type, amount, currency}) => (
                    <tr className={css.item} key={id}>
                        <td className={css.type}>{type}</td>
                        <td className={amount}>{amount}</td>
                        <td className={currency}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        },)
    ),
};