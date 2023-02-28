import "./App.css";
import { UserList } from "./UserList";

function App() {
  //temporary data for the user should be shown here ni???
  //This should make some sense for sure -- now figuring out to other cool stuff
  //Some important regarding when the app re-renders and how the values updates, and what not
  //All that cool and complicated stuff is gone for now from my mind!! - blown off in simple words

  const usersData = [
    {
      username: "mayank190801",
      age: 12,
    },
    {
      username: "Random123123",
      age: 12,
    },
    {
      username: "NotSoRandom",
      age: 42,
    },
    {
      username: "Why so random bruh",
      age: 38,
    },
    {
      username: "Sanvi@123",
      age: 82,
    },
  ];

  return (
    <div className="App">
      <UserList usersData={usersData} />
    </div>
  );
}

export default App;
