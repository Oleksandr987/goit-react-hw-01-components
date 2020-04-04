import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendItem = ({friend}) => {
    const { avatar, name, isOnline } = friend;
    return (
        <li className={styles.FriendItem}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="avatar user" width="48"></img>
            <p className={styles.name}>{name}</p>
        </li>
    );
};

const FriendList = ({friends}) => (
    <ul className={styles.FriendList}>
        {friends.map(friend =>
           <FriendItem key={friend.id} friend={friend} />)}
    </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;