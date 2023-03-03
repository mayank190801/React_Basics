import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEvent from "./pages/EditEvent";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import RootLayout from "./components/RootLayout";
import EventsNavigation from "./components/EventsNavigation";
import EventForm from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/events",
        element: <EventsNavigation />,
        children: [
          { path: "/events", element: <Events /> },
          { path: "/events/:someId", element: <EventDetail /> },
          { path: "/events/new", element: <NewEvent /> },
          { path: "/events/:someId/edit", element: <EventForm /> },
        ],
      },
    ],
  },
]);

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
