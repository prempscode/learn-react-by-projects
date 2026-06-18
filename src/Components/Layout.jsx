import React from "react";
import { Link , Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <header>
          <h1>My Shop</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>    
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Outlet /> 
        </main>
        <footer>
          <p>© 2025 My Shop</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
