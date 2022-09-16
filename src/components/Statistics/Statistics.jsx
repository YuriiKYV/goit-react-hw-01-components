import { PropTypes } from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            {stats && <ul className={css.statList}>
                {stats.map(el => (
                    <li key={el.id} className={css.item}>
                        <span className={css.label}>{el.label}</span>
                        <span className={css.percentage}>{el.percentage}%</span>
                    </li>
                ))}
            </ul>}

            
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};