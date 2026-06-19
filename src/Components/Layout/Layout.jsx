import React from "react";
import { Link, Outlet , ScrollRestoration} from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <ScrollRestoration />

      <header className="layout-header">
        <h1>Learn React</h1>

        <nav className="layout-nav">
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/urlshortener">URL Shortener</Link>
          <Link to="/githubfinder">GithubFinder</Link>
          <Link to="/profile" prefetch="intent">
            Profile
          </Link>
        </nav>
      </header>

      <main className="layout-main">
        <Outlet />
      </main>

      {/* <footer className="layout-footer">
        <p>© Learn React 19 by Prem</p>
      </footer> */}
      <footer className="layout-footer">
        <div className="layout-footer__brand">
          <div className="layout-footer__icon">
            <i className="ti ti-brand-react" aria-hidden="true"></i>
          </div>
        </div>
        <p>
          <span>Created with</span> &hearts; by Prem
        </p>
      </footer>
    </div>
  );
}

export default Layout;
