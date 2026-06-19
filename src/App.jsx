import React from "react";
import Profile from "./Components/Profile/Profile";
import Todo from "./Components/Todo/Todo";
import Home from "./Components/Home/Home";
import UrlShortener from "./Components/Url/UrlShortener";
import Layout from "./Components/Layout/Layout";
import GithubFinder from "./Components/GithubFinder/GithubFinder";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import NoPage from "./Pages/NoPage/NoPage";
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
      { path: "githubfinder", element: <GithubFinder /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
