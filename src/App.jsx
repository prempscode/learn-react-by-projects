import React from "react";
import Profile from "./Components/Profile";
import Products from "./Components/Products";
import Home from "./Components/Home";
import About from "./Components/About";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Layout from "./Components/Layout";

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
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
