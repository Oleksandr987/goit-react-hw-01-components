import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './statsItem';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statsList}>
      {stats.map(({ label, percentage }) => (
        <StatsItem label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: ' ',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
