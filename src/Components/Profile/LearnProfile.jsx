import React from "react";
import "./LearnProfile.css";

const LearnProfile = () => {
  return (
    <div className="react-notes">
      <h1>Learn From This Project</h1>

      {/* ── 39 ── */}
      <section>
        <h2>39. How React Router 7 Works</h2>
        <p>
          React Router 7 is not just a routing library — it is a full
          framework-level tool that controls how your entire app is structured,
          how data is loaded before a page renders, and how errors are handled.
          Instead of putting routes inside JSX like older versions, you define
          them as a plain JavaScript array of objects and pass that to{" "}
          <code>createBrowserRouter()</code>.
        </p>

        <pre>
          {`import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "todo", element: <Todo /> },
      { path: "urlshortener", element: <UrlShortener /> },
      { path: "githubfinder", element: <GithubFinder /> },
      { path: "profile", element: <Profile />, loader: githubProfileLoader },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;`}
        </pre>

        <p>
          <code>RouterProvider</code> takes the router object and makes it
          available to the entire app. Every route, loader, and error boundary
          is configured in this one place — making the routing logic easy to
          read at a glance.
        </p>
      </section>

      {/* ── 40 ── */}
      <section>
        <h2>40. createBrowserRouter()</h2>
        <p>
          <code>createBrowserRouter()</code> is the modern way to define routes
          in React Router 7. It takes an array of route objects and returns a
          router instance. Each route object describes a URL path, which
          component to render, and optionally a loader function that fetches
          data before the component mounts.
        </p>

        <pre>
          {`const router = createBrowserRouter([
  {
    path: "/",        // URL pattern
    element: <Layout />,  // component to render
    children: [ ... ] // nested routes
  }
]);`}
        </pre>

        <p>
          The key advantage over the older <code>&lt;Routes&gt;</code> JSX
          approach: data loading, error handling, and route structure are all
          co-located in one object. React Router can read ahead, prefetch data,
          and handle errors at the route level without you writing any extra
          logic.
        </p>
      </section>

      {/* ── 41 ── */}
      <section>
        <h2>41. Layout Route</h2>
        <p>
          A Layout Route is a parent route whose <code>element</code> wraps
          every child route. It renders shared UI — the navbar, footer, sidebar
          — that should appear on every page. The children swap in and out
          through <code>&lt;Outlet /&gt;</code> without the Layout ever
          unmounting.
        </p>

        <pre>
          {`// App.jsx — Layout is the parent
{
  path: "/",
  element: <Layout />,   // always rendered
  children: [
    { index: true, element: <Home /> },
    { path: "todo", element: <Todo /> },
  ]
}`}
        </pre>

        <pre>
          {`// Layout.jsx — Outlet is the slot
function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
        </nav>
      </header>

      <main>
        <Outlet />  {/* child route renders here */}
      </main>

      <footer>© 2026 by Prem</footer>
    </div>
  );
}`}
        </pre>

        <p>
          Navigate from <code>/todo</code> to <code>/profile</code> and React
          Router swaps only the Outlet content. The header and footer stay
          mounted — no flicker, no re-render of shared UI.
        </p>
      </section>

      {/* ── 42 ── */}
      <section>
        <h2>42. Outlet</h2>
        <p>
          <code>&lt;Outlet /&gt;</code> is a placeholder component provided by
          React Router. When a parent route renders, React Router looks at the
          current URL, finds the matching child route, and renders that child's
          element inside the Outlet. Without an Outlet in the parent, the
          children would have nowhere to appear.
        </p>

        <pre>
          {`import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>...</nav>
      <Outlet />   {/* active child route goes here */}
      <footer>...</footer>
    </div>
  );
}`}
        </pre>

        <p>
          Think of it as a window cut into the Layout. The frame (navbar,
          footer) stays fixed. Only the view through the window changes as the
          user navigates.
        </p>
      </section>

      {/* ── 43 ── */}
      <section>
        <h2>43. Index Route</h2>
        <p>
          An index route is the default child that renders when the parent
          path matches exactly but no child path is specified. In this project,
          visiting <code>/</code> renders <code>&lt;Home /&gt;</code> because
          it is marked <code>index: true</code>.
        </p>

        <pre>
          {`children: [
  { index: true, element: <Home /> },  // renders at "/"
  { path: "todo", element: <Todo /> }, // renders at "/todo"
]`}
        </pre>

        <p>
          Without an index route, visiting the parent path <code>/</code> would
          render the Layout with an empty Outlet — nothing inside the main
          content area.
        </p>
      </section>

      {/* ── 44 ── */}
      <section>
        <h2>44. Link vs anchor tag</h2>
        <p>
          In React Router, always use <code>&lt;Link&gt;</code> instead of{" "}
          <code>&lt;a href&gt;</code> for internal navigation. An{" "}
          <code>&lt;a&gt;</code> tag causes a full page reload — the browser
          requests the HTML from the server again, React remounts everything,
          and all state is lost. <code>&lt;Link&gt;</code> intercepts the click,
          updates the URL, and swaps the route component without ever leaving
          the page.
        </p>

        <pre>
          {`import { Link } from "react-router-dom";

// ✗ Wrong — causes full page reload
<a href="/todo">Todo</a>

// ✓ Correct — client-side navigation
<Link to="/todo">Todo</Link>`}
        </pre>

        <p>
          Use <code>&lt;a&gt;</code> only for external URLs (like GitHub,
          TinyURL). Use <code>&lt;Link&gt;</code> for everything inside your
          own app.
        </p>
      </section>

      {/* ── 45 ── */}
      <section>
        <h2>45. Loader Functions</h2>
        <p>
          A loader is an <code>async</code> function attached to a route that
          runs <em>before</em> the route's component renders. React Router calls
          it automatically when the user navigates to that route. By the time
          the component mounts, the data is already there — no loading spinner
          inside the component needed.
        </p>

        <pre>
          {`// App.jsx — defined outside the router
async function githubProfileLoader() {
  const res = await fetch(
    "https://api.github.com/users/prempscode"
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();  // whatever you return becomes loader data
}

// Attached to the route
{ path: "profile", element: <Profile />, loader: githubProfileLoader }`}
        </pre>

        <p>
          The loader runs before the component. If it throws, React Router
          catches the error at the route level. If it succeeds, the data is
          passed to the component through <code>useLoaderData()</code>.
        </p>
      </section>

      {/* ── 46 ── */}
      <section>
        <h2>46. useLoaderData()</h2>
        <p>
          <code>useLoaderData()</code> is a React Router hook that returns
          whatever the route's loader function resolved with. The component
          doesn't fetch, doesn't manage loading state, doesn't handle errors —
          it just reads the data that React Router already prepared.
        </p>

        <pre>
          {`import { useLoaderData } from "react-router-dom";

function Profile() {
  const user = useLoaderData();
  // user is the full GitHub API response object

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>Followers: {user.followers}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  );
}`}
        </pre>

        <p>
          Compare this to the GitHub Finder project where you had to manage{" "}
          <code>loading</code>, <code>profile</code>, and <code>error</code>{" "}
          state manually. With a loader, all of that moves out of the component
          entirely. The component stays clean — it only renders.
        </p>
      </section>

      {/* ── 47 ── */}
      <section>
        <h2>47. Loader vs fetch() Inside a Component</h2>
        <p>
          Both approaches fetch data from an API. The difference is
          <em> when</em> and <em>where</em> it happens.
        </p>

        <pre>
          {`// ── GitHub Finder approach (fetch inside component)
function GithubFinder() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setProfile(data);
    setLoading(false);
  };

  // component renders first with empty state
  // then fetches, then re-renders with data
}

// ── Profile approach (loader)
async function githubProfileLoader() {
  const res = await fetch(url);
  return res.json();
  // data is ready BEFORE component renders
}

function Profile() {
  const user = useLoaderData(); // data already here
  // no loading state, no useEffect, no setState
}`}
        </pre>

        <p>
          Loaders eliminate the "loading flicker" — the brief moment where a
          component renders empty before data arrives. The page only transitions
          once the data is ready.
        </p>
      </section>

      {/* ── 48 ── */}
      <section>
        <h2>48. prefetch="intent"</h2>
        <p>
          In React Router 7, you can add <code>prefetch="intent"</code> to a{" "}
          <code>&lt;Link&gt;</code>. This tells React Router to start running
          the loader for that route the moment the user <em>hovers</em> over
          the link — before they even click. By the time they click, the data
          is already loaded.
        </p>

        <pre>
          {`<Link to="/profile" prefetch="intent">
  Profile
</Link>`}
        </pre>

        <p>
          In this project the Profile route has a loader that hits the GitHub
          API. Without prefetch, the user clicks Profile and waits for the API.
          With <code>prefetch="intent"</code>, the API call starts on hover and
          the transition feels instant.
        </p>
      </section>

      {/* ── 49 ── */}
      <section>
        <h2>49. Nested Routes</h2>
        <p>
          Nested routes are child routes defined inside a parent route's{" "}
          <code>children</code> array. The parent renders its layout, and each
          child renders inside the parent's <code>&lt;Outlet /&gt;</code>. This
          is how one layout (navbar + footer) wraps multiple pages without
          duplicating any HTML.
        </p>

        <pre>
          {`// One parent, five children — all share the Layout
{
  path: "/",
  element: <Layout />,
  children: [
    { index: true,           element: <Home />        },
    { path: "todo",          element: <Todo />         },
    { path: "urlshortener",  element: <UrlShortener /> },
    { path: "githubfinder",  element: <GithubFinder /> },
    { path: "profile",       element: <Profile />,
                             loader: githubProfileLoader },
  ],
}`}
        </pre>

        <p>
          Every time you visit any of these paths, React Router renders{" "}
          <code>&lt;Layout /&gt;</code> first, then injects the matching child
          into its <code>&lt;Outlet /&gt;</code>. The navbar and footer are
          defined once and appear on every page automatically.
        </p>
      </section>

      {/* ── 50 ── */}
      <section>
        <h2>50. Error Handling at the Route Level</h2>
        <p>
          When a loader throws an error — network failure, bad API response,
          wrong URL — React Router catches it automatically at the route level.
          You can define an <code>errorElement</code> on any route to render a
          custom error UI instead of crashing the whole app.
        </p>

        <pre>
          {`async function githubProfileLoader() {
  const res = await fetch(
    "https://api.github.com/users/prempscode"
  );
  if (!res.ok) throw new Error("GitHub API failed");
  return res.json();
}

// In the router config
{
  path: "profile",
  element: <Profile />,
  loader: githubProfileLoader,
  errorElement: <p>Could not load profile.</p>
}`}
        </pre>

        <p>
          If the loader throws, React Router renders <code>errorElement</code>{" "}
          instead of <code>element</code>. The rest of the app — other routes,
          the Layout — continues working normally. Only the failing route shows
          the error UI.
        </p>
      </section>

      {/* ── 51 ── */}
      <section>
        <h2>51. useLoaderData with Real GitHub API Data</h2>
        <p>
          The GitHub API returns a rich object. <code>useLoaderData()</code>{" "}
          gives you the whole thing, and you pick out only the fields you need
          directly in JSX. No transformation, no extra state — just destructure
          and render.
        </p>

        <pre>
          {`function Profile() {
  const user = useLoaderData();

  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name || user.login}</h2>
      <p>@{user.login}</p>
      <p>{user.bio || "No bio available"}</p>

      <div className="stats">
        <span>{user.public_repos} Repos</span>
        <span>{user.followers} Followers</span>
        <span>{user.following} Following</span>
      </div>

      <p>{user.location}</p>

      <a href={user.html_url}
         target="_blank"
         rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}`}
        </pre>

        <p>
          <code>user.name || user.login</code> is a practical pattern — the
          GitHub API returns <code>null</code> for <code>name</code> if the
          user hasn't set one. The <code>||</code> fallback ensures something
          always renders.
        </p>
      </section>

      {/* ── 52 ── */}
      <section>
        <h2>52. Complete Project Flow</h2>

        <pre>
          {`App starts
      ↓
createBrowserRouter() reads the route config
      ↓
RouterProvider makes the router available
      ↓
User visits "/profile"
      ↓
React Router matches the profile route
      ↓
githubProfileLoader() runs FIRST
      ↓
fetch("api.github.com/users/prempscode")
      ↓
GitHub API responds with user object
      ↓
Loader returns the data
      ↓
Layout renders (navbar + footer)
      ↓
<Outlet /> renders <Profile />
      ↓
useLoaderData() returns the GitHub object
      ↓
Profile renders avatar, name, bio, stats
      ↓
User sees the complete profile — no flicker`}
        </pre>
      </section>

      {/* ── 53 ── */}
      <section>
        <h2>53. Everything Learned — All Four Projects</h2>

        <p>After all four projects, here is the complete picture:</p>

        <ul>
          <li>
            <strong>Todo App</strong> — JSX, functional components, useState,
            controlled inputs, event handling, arrays of objects, map(),
            filter(), conditional rendering, ternary operator
          </li>
          <li>
            <strong>URL Shortener</strong> — fetch(), async/await, Promises,
            try/catch, template literals, encodeURIComponent(), loading states,
            API response handling, external links
          </li>
          <li>
            <strong>GitHub Finder</strong> — object state, dynamic API URLs,
            search functionality, response.json(), Object.keys(), external
            images, React re-render cycle
          </li>
          <li>
            <strong>Profile + React Router 7</strong> — createBrowserRouter(),
            RouterProvider, Layout route, Outlet, index route, nested routes,
            Link vs anchor, loader functions, useLoaderData(), prefetch intent,
            route-level error handling
          </li>
        </ul>

        <p>
          The natural next topics from here are <strong>Props</strong>,{" "}
          <strong>useEffect</strong>, <strong>Component Communication</strong>,{" "}
          <strong>Context API</strong>, <strong>Custom Hooks</strong>, and{" "}
          <strong>State Management with Zustand or Redux</strong>.
        </p>
      </section>
    </div>
  );
};

export default LearnProfile;
