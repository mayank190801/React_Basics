import { User } from "./User";

export const UserList = ({ usersData }) => {
  //it will call userList
  //There should be a component tree
  return (
    <div>
      <h1>Below are all the users present!</h1>
      {usersData.map((data) => {
        return (
          <User key={Math.random()} username={data.username} age={data.age} />
        );
      })}
    </div>
  );
};
