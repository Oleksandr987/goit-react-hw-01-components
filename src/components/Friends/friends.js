import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import styles from './friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.FriendList}>
    {friends.map(friend => (
      <FriendItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
