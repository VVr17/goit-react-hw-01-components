import { Container } from './App.styled';
import { FriendList } from '../FriendList/FriendList';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TransationHistory } from "../TransactionHistory/TransactionHistory";
import data from '../../data.json';
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import user from '../../user.json';

export const App = () => {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends = {friends}/>
      <TransationHistory items={transactions}/>
    </Container>
  );
};
