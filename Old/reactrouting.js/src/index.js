import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Contact } from "./Contact";
import { Random } from "./Random";
import { loader as someLoader } from "./Random";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//But it was the small outlet of that above big boi no??
//Home and projects being inside that bad boi
//So outisde

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "random",
        element: <Random />,
        loader: someLoader,
      },
    ],
  },
]);

export const AppContext = createContext();

//let's use it here
//The global shit bruh!!
//Try no what is state management and other shit

//Playing with state management in this section of the code bois

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// <AppContext.Provider value={(username, setUsername)}></AppContext.Provider>
