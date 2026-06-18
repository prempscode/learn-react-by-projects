import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>React Router</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/profile" prefetch="intent">
            Profile
          </Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>
        <p>© 2025 My Shop</p>
      </footer>
    </div>
  );
}
export default Layout;
