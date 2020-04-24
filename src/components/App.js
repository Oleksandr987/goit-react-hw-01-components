import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/statistics';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './Friends/friends';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/transaction';
import transactions from './Transaction/transactions.json';

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
