import React from 'react';
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import Profile from '../components/profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friends/friendlist';
import Transactions from './transactions/transactions';
import transactionss from '../data/transactionss';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        objKeys={Object.keys(user.stats)}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactionss} />
    </div>
  );
};

// В разметке компонент записывается как JSX-тег
