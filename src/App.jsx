import React from "react";
import Profile from "./Components/Profile";
import Todo from "./Components//Todo/Todo";
import Home from "./Components/Home";
import UrlShortener from "./Components/Url/UrlShortener";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";

async function githubProfileLoader() {
  const res = await fetch("https://api.github.com/users/prempscode");
  if (!res.ok) throw new Error("Failed to fetch GitHub profile");
  return res.json();
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "urlshortener", element: <UrlShortener /> },
      { path: "Todo", element: <Todo /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
