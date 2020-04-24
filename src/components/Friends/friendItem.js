import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.FriendItem}>
      <span className={isOnline ? styles.online : styles.offline} />
      <img
        className={styles.avatar}
        src={avatar}
        alt="avatar user"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendItem;
