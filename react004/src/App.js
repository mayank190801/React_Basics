import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

//Wrapping around div won't work always so
//<React.Fragment> or <> -- whatever you like

//So basically we played with ref and shit
//So every component we attach with ref is basically uncontrolled componenet
//Other whose every keystroke and state we are playing with is controlled component
//A lil more code but more understanding maybe
//Its upto the use case for sure, when you want ref and when you want other stuff bruh

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
