import { Profile } from './profile/profile';
import user from './data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';

import { Friends } from './Friends/friends';
import friends from './data/friends.json';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <Friends friends={friends} />
    </div>
  );
};
