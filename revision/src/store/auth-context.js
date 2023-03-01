import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

//you can manage all the state here at once place if you want to!!
//Simple as that
const AuthContextProvider = (props) => {
  const [isLogged, setLogged] = useState("");

  //create functions and all that and you can access those functions and use them on your own mood
  //You can simply manage all the state at one place, and can be accesses throughout the app, if you wnt
  //You can useState or useReducer, whatever you like --- simple as that
  const logoutHandler = () => {
    console.log("how cool is that");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLogged,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
