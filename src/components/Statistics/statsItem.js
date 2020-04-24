import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const StatsItem = ({ id, label, percentage }) => {
  return (
    <li
      className={styles.statsItem}
      key={id}
      style={{ backgroundColor: randomColors() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
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
  return colors[Math.floor(Math.random() * colors.length)];
};

StatsItem.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default StatsItem;
