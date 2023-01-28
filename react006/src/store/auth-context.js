import React from "react";
//I have to export this context from here!!!

//These below are all the default values you provide in a context
///Using AuthContext.Provider you can use states, and update the values and everything you like
//Just mention it once and no props again and again needed after that for sure
export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

//So if you techically you don't need the provider, you can play with default values
//But if you ever create the Authentic.Provider you have to put and set values in it
