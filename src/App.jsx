/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
         <Route path="/about" element={<About></About>} ></Route>
          <Route path="/contact" element={<Contact></Contact>} ></Route>
          <Route path="*" element={<NoPage></NoPage>} ></Route>

      </Routes>
    </Router>
  </>;
};

export default App;
