/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Navbar from "./Components/Navbar";
import User from "./Pages/User";
import Dynamic_User from "./Pages/Dynamic_User";
const App = () => {

    const user = [
    { id: 1, name: "superman", gmail: "super@gmail.com", age: 42 },
    { id: 2, name: "spiderman", gmail: "spider@gmail.com", age: 21 },
    { id: 3, name: "batman", gmail: "bat@gmail.com", age: 25 },
    { id: 4, name: "ironman", gmail: "iron@gmail.com", age: 32 },
  ];
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/user" element={<User user={user} ></User>}></Route>
          <Route path="/user/:id" element={<Dynamic_User user={user}></Dynamic_User>}></Route>

          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
