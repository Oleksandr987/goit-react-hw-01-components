import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statsList}>
      {stats.map(stat => (
        <li className={styles.statsItem} key={stat.id} style={{backgroundColor: randomColors()}}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
    title: " ",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

const randomColors = () => {
    const colors = [
      '#4ed425',
      '#d425b5',
      '#d49825',
      '#234798',
      '#25d4d2',
      '#d4253e',
      '#19be7a',
    ];
    return colors[Math.floor(Math.random()*colors.length)]
}

export default Statistics;