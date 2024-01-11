import User from './User/User';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statistics from '../data/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <main>
      <User items={user} />
      <Statistics title="UPLOAD STATS" items={statistics} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};
