import React from "react";
import user from "./user";
import data from "./data"
import friends from "./friends"
import Profile from "./profile";
import Statistics from "./statistics";
import FriendList from "./friendlist";
import Transactions from "./transactions";
import transactionss from "./transactionss"

import PropTypes from 'prop-types';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
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
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.object,
  objKeys:PropTypes.array,
};
Statistics.propTypes = {
  title:PropTypes.string,
  stats:PropTypes.array,
};
// В разметке компонент записывается как JSX-тег
FriendList.propTypes = {
  friends:PropTypes.array,
}
Transactions.propTypes = {
  items:PropTypes.array,
}