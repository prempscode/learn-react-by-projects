import React from "react";
import "./LearnGitHubFinder.css";

const LearnGitHubFinder = () => {
  return (
    <div className="react-notes">
      <h1>Learn From This Project</h1>

      <section>
        <h2>27. Object State in React</h2>
        <p>
          So far you've stored a single string or a list of items in state. But
          when an API returns a bundle of related data — like a GitHub profile —
          it makes more sense to store the whole thing as one object rather than
          creating a separate state variable for every field.
        </p>

        <p>Previous patterns you already know:</p>

        <pre>
          {`const [task, setTask] = useState("");      // string
const [alltask, setAlltask] = useState([]); // array`}
        </pre>

        <p>New pattern for this project:</p>

        <pre>{`const [profile, setProfile] = useState({}); // object`}</pre>

        <p>
          The GitHub API responds with a single object that contains everything
          about a user:
        </p>

        <pre>
          {`{
  login: "prempscode",
  avatar_url: "https://avatars.githubusercontent.com/...",
  followers: 100,
  following: 50,
  public_repos: 25
}`}
        </pre>

        <p>
          Storing this as one object is far cleaner than juggling five separate
          state variables. When the API response arrives, one{" "}
          <code>setProfile(data)</code> call updates everything at once.
        </p>
      </section>

      <section>
        <h2>28. Dynamic API Requests</h2>
        <p>
          A static URL always fetches the same resource — it's hard-coded and
          never changes. A dynamic URL is built at runtime using the current
          value of state, so each search targets a different endpoint.
        </p>

        <pre>
          {`// Static — always returns the same profile
https://api.github.com/users/prempscode

// Dynamic — changes with whatever the user typed
\`https://api.github.com/users/\${username}\``}
        </pre>

        <p>
          When the user types <code>torvalds</code> and clicks Search, the
          template literal builds the URL on the fly:
        </p>

        <pre>{`https://api.github.com/users/torvalds`}</pre>

        <p>
          This is the pattern behind every search feature on the web — the user
          controls the variable part of the URL through state.
        </p>
      </section>

      <section>
        <h2>29. Search Functionality</h2>
        <p>
          The search input follows the same controlled component pattern from
          the Todo project. The difference here is that the value captured isn't
          a task — it's a GitHub username that will be injected into the API
          URL.
        </p>

        <pre>
          {`<input
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>`}
        </pre>

        <pre>
          {`User Types "torvalds"
        ↓
onChange fires on every keystroke
        ↓
setUsername() updates state
        ↓
username = "torvalds"
        ↓
Used in the API URL when Search is clicked`}
        </pre>

        <p>
          At the moment the Search button is clicked, <code>username</code>{" "}
          already holds the complete value — no need to read the DOM.
        </p>
      </section>

      <section>
        <h2>30. Loading State</h2>
        <p>
          You first saw loading state in the URL Shortener. The same principle
          applies here: GitHub's API is not instant, and without visual
          feedback, the user has no way of knowing whether the app received
          their click.
        </p>

        <pre>{`const [loading, setLoading] = useState(false);`}</pre>

        <pre>
          {`// Turn on before the request
setLoading(true);

// Turn off after the response arrives
setLoading(false);`}
        </pre>

        <p>In JSX, the button text reflects the current state:</p>

        <pre>
          {`<button onClick={fetchProfile}>
  {loading ? "Searching..." : "Search"}
</button>`}
        </pre>

        <pre>
          {`Search Clicked
      ↓
loading = true  →  Button shows "Searching..."
      ↓
API responds
      ↓
loading = false  →  Button shows "Search" again
      ↓
Profile appears`}
        </pre>
      </section>

      <section>
        <h2>31. API Response Handling</h2>
        <p>
          GitHub's API returns data in JSON format. The raw HTTP response is not
          immediately usable — it needs to be converted before React can work
          with it. This requires two <code>await</code> calls, not one.
        </p>

        <pre>
          {`// Step 1 — wait for the network response
const response = await fetch(url);

// Step 2 — wait for the body to parse as JSON
const data = await response.json();

// Step 3 — save the parsed object to state
setProfile(data);`}
        </pre>

        <p>
          <code>response.json()</code> is itself asynchronous because the
          response body can be large and arrives in chunks. The{" "}
          <code>await</code> ensures we have the full, parsed object before
          calling <code>setProfile</code>.
        </p>

        <pre>
          {`Request Sent
      ↓
Network Response Received
      ↓
Body Parsed to JSON Object
      ↓
Stored in State via setProfile()
      ↓
React Re-renders with profile data`}
        </pre>
      </section>

      <section>
        <h2>32. Conditional Rendering with Objects</h2>
        <p>
          When the app first loads, <code>profile</code> is an empty object{" "}
          <code>{"{}"}</code>. Trying to render <code>profile.login</code> or{" "}
          <code>profile.avatar_url</code> at that point would display nothing —
          or cause errors if nested. We guard against this by checking whether
          the object has any keys yet.
        </p>

        <pre>
          {`{Object.keys(profile).length > 0
  ? <ProfileCard profile={profile} />
  : <p>Search for a valid GitHub username.</p>
}`}
        </pre>

        <p>
          An empty object <code>{"{}"}</code> has zero keys, so the placeholder
          message shows. Once <code>setProfile(data)</code> runs and the object
          is populated, <code>Object.keys(profile).length</code> becomes greater
          than zero, and the profile card renders instead.
        </p>
      </section>

      <section>
        <h2>33. Rendering External Images</h2>
        <p>
          The GitHub API includes an <code>avatar_url</code> field — a direct
          link to the user's profile picture hosted on GitHub's servers. We can
          use this URL as the <code>src</code> of an <code>img</code> tag just
          like any local image.
        </p>

        <pre>
          {`<img
  src={profile.avatar_url}
  alt={profile.login}
/>`}
        </pre>

        <p>
          The <code>alt</code> attribute serves two purposes: it shows a text
          fallback if the image fails to load, and it describes the image to
          screen readers used by people with visual impairments. Using{" "}
          <code>profile.login</code> (the username) is meaningful — far better
          than leaving it empty or writing "image".
        </p>
      </section>

      <section>
        <h2>34. Rendering External Links</h2>
        <p>
          The API also returns <code>html_url</code> — the full link to the
          user's GitHub profile page. We render it as an anchor tag that opens
          in a new tab.
        </p>

        <pre>
          {`<a
  href={profile.html_url}
  target="_blank"
  rel="noopener noreferrer"
>
  View Profile
</a>`}
        </pre>

        <p>
          You covered <code>target="_blank"</code> and{" "}
          <code>rel="noopener noreferrer"</code> in the URL Shortener project.
          The same security rule applies here: always include both attributes
          whenever a link opens in a new tab.
        </p>
      </section>

      <section>
        <h2>35. React Re-render Cycle</h2>
        <p>
          Every time <code>setProfile(data)</code> is called, React schedules a
          re-render of the component. It compares the new state to the previous
          state, figures out what changed in the UI, and updates only those
          parts of the DOM — without reloading the page.
        </p>

        <pre>
          {`setProfile(data)
      ↓
React detects state changed
      ↓
Component function re-runs
      ↓
New JSX is returned
      ↓
React updates only the changed DOM nodes
      ↓
Profile appears on screen`}
        </pre>

        <p>
          This is the core difference between React and vanilla JavaScript. In
          vanilla JS you would manually find elements and set their content:
        </p>

        <pre>{`document.getElementById("name").innerText = data.login;`}</pre>

        <p>
          In React, you just update state. The UI is a direct reflection of
          state — React handles the rest automatically.
        </p>
      </section>

      <section>
        <h2>36. Object.keys()</h2>
        <p>
          <code>Object.keys()</code> is a built-in JavaScript method that
          returns an array of all the property names in an object. It's the
          standard way to check whether an object is empty.
        </p>

        <pre>
          {`const obj = {};
Object.keys(obj)        // []
Object.keys(obj).length // 0  → object is empty`}
        </pre>

        <p>
          After the API responds and <code>setProfile(data)</code> runs:
        </p>

        <pre>
          {`profile = {
  login: "prempscode",
  followers: 100,
  ...
}

Object.keys(profile)        // ["login", "followers", ...]
Object.keys(profile).length // 5 or more → object has data`}
        </pre>

        <p>
          <code>length {">"} 0</code> becomes <code>true</code>, and React
          renders the profile card. This is a safe, reliable guard that works
          regardless of how many fields the API returns.
        </p>
      </section>

      <section>
        <h2>37. Complete Project Flow</h2>

        <pre>
          {`User opens the app
        ↓
profile = {}  →  placeholder message shows
        ↓
User types a GitHub username
        ↓
setUsername() updates state on every keystroke
        ↓
User clicks Search
        ↓
fetchProfile() runs
        ↓
setLoading(true)  →  button shows "Searching..."
        ↓
fetch() sends request to GitHub API
        ↓
Response arrives
        ↓
response.json() parses the body
        ↓
setProfile(data) stores the object in state
        ↓
setLoading(false)  →  button resets to "Search"
        ↓
React re-renders
        ↓
Object.keys(profile).length > 0  →  true
        ↓
Avatar, name, followers, and links appear`}
        </pre>
      </section>

      <section>
        <h2>38. Concepts Learned After Three Projects</h2>

        <p>Here's everything you've covered so far, grouped by project:</p>

        <ul>
          <li>
            <strong>Todo App</strong> — JSX, functional components, useState,
            controlled inputs, event handling, arrays of objects, map(),
            filter(), conditional rendering, ternary operator, React Router,
            Layout &amp; Outlet
          </li>
          <li>
            <strong>URL Shortener</strong> — APIs, fetch(), Promises,
            async/await, try/catch, template literals, encodeURIComponent(),
            loading states, API response handling, external links
          </li>
          <li>
            <strong>GitHub Finder</strong> — object state, dynamic API URLs,
            search functionality, response.json(), Object.keys(), rendering
            external images, React re-render cycle, conditional rendering with
            objects
          </li>
        </ul>

        <p>
          The natural next topics to explore are <strong>Props</strong>,{" "}
          <strong>useEffect</strong>, <strong>Component Communication</strong>,{" "}
          <strong>Context API</strong>, <strong>Custom Hooks</strong>, and{" "}
          <strong>State Management</strong>.
        </p>
      </section>
    </div>
  );
};

export default LearnGitHubFinder;
