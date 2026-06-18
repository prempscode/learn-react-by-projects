import React from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "../Pages/Contact";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
        <NavLink to={"/user"}>User</NavLink>
      </div>
    </>
  );
};

export default Navbar;
