import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [normalVal, setNormalVal] = useState(0);
  // const [testVal, setTestVal] = useState(0);

  //so whenever we are going to load the application
  //useEffect is extremely clear to me now for sure -- pretty pretty clear bruh!!
  //Let's work on something else for now
  useEffect(() => {
    const currentState = localStorage.getItem("isLoggedIn");
    if (currentState !== null) {
      if (currentState === "1") setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    //we should
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  // const incrementVar = () => {
  //   setNormalVal(normalVal + 1);
  // };

  // const incrementTestVal = () => {
  //   setTestVal(testVal + 1);
  // };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
