import React from "react";
import "./LearnURLShortener.css";

const LearnURLShortener = () => {
  return (
    <div className="react-notes">
      <h1>Learn From This Project</h1>

      <section>
        <h2>15. What is an API?</h2>
        <p>
          API stands for <strong>Application Programming Interface</strong>. It
          is a bridge that lets two separate applications talk to each other.
          Your React app never directly touches TinyURL's database — it sends a
          request through TinyURL's API and gets a response back.
        </p>

        <pre>
          {`React App
    ↓  sends request
TinyURL API
    ↓  returns result
React UI Updates`}
        </pre>

        <p>
          Real-life analogy: think of an API as a waiter in a restaurant. You
          tell the waiter what you want, the waiter tells the kitchen, and the
          kitchen sends the food back through the waiter. You never walk into
          the kitchen yourself.
        </p>

        <p>In this project, we call:</p>

        <pre>{`https://tinyurl.com/api-create.php?url=...`}</pre>

        <p>
          TinyURL processes it and responds with a short URL like{" "}
          <code>https://tinyurl.com/abc123</code>.
        </p>
      </section>

      <section>
        <h2>16. What is the Fetch API?</h2>
        <p>
          <code>fetch()</code> is a built-in browser function that lets
          JavaScript send HTTP requests and receive responses — no third-party
          library needed.
        </p>

        <pre>{`const response = await fetch(url);`}</pre>

        <p>In this project:</p>

        <pre>
          {`const response = await fetch(
  \`https://tinyurl.com/api-create.php?url=\${encodeURIComponent(urldata)}\`
);`}
        </pre>

        <p>What happens step by step:</p>

        <pre>
          {`User Clicks Button
        ↓
fetch() runs
        ↓
Request travels to TinyURL's server
        ↓
Server processes the long URL
        ↓
Server sends back a short URL
        ↓
React receives and displays it`}
        </pre>
      </section>

      <section>
        <h2>17. Async and Await</h2>
        <p>
          Network requests are not instant — they take time. JavaScript is
          single-threaded, meaning it runs one thing at a time. Without{" "}
          <code>async/await</code>, JavaScript would either freeze the whole app
          while waiting, or skip the response entirely and move on.
        </p>

        <p>
          <code>async</code> marks a function as one that will perform
          asynchronous work. <code>await</code> tells JavaScript:{" "}
          <em>
            "Pause here and wait for this promise to finish — but keep the rest
            of the app running."
          </em>
        </p>

        <pre>
          {`async function shortenUrl() {
  const response = await fetch(url);
  const text = await response.text();
}`}
        </pre>

        <p>
          Without <code>await</code>, <code>response</code> would be a pending
          Promise object, not the actual data — and your app would display
          nothing useful.
        </p>
      </section>

      <section>
        <h2>18. Promises</h2>
        <p>
          A Promise is JavaScript's way of representing a value that isn't
          available yet but will be in the future. <code>fetch()</code> returns
          a Promise immediately, even before the server has replied.
        </p>

        <p>A Promise is always in one of three states:</p>

        <pre>
          {`Pending   → request is on its way
Fulfilled → response arrived successfully
Rejected  → something went wrong (no internet, server error, etc.)`}
        </pre>

        <p>
          <code>await</code> waits for the Promise to leave the{" "}
          <em>Pending</em> state. If it becomes <em>Fulfilled</em>, you get the
          value. If it becomes <em>Rejected</em>, the error is thrown — which is
          why we pair it with <code>try/catch</code>.
        </p>
      </section>

      <section>
        <h2>19. try...catch</h2>
        <p>
          Network requests can fail for many reasons: no internet, the server is
          down, the URL is malformed, or the API has changed. If we don't handle
          these failures, the error will crash the component silently.
        </p>

        <p>
          <code>try</code> runs the risky code. If anything inside it throws an
          error, <code>catch</code> intercepts it so the app can recover
          gracefully instead of breaking.
        </p>

        <pre>
          {`try {
  const response = await fetch(url);
  const text = await response.text();
  setResurl(text);
} catch (error) {
  console.log(error);
  // show a user-friendly error message here
}`}
        </pre>

        <pre>
          {`Code runs inside try
        ↓
Error occurs?
        ↓
No  → continues normally
Yes → jumps to catch()`}
        </pre>
      </section>

      <section>
        <h2>20. Template Literals</h2>
        <p>
          Template literals let you embed JavaScript expressions directly inside
          a string using backticks (<code>`</code>) and{" "}
          <code>{"${}"}</code> syntax. This is cleaner than string
          concatenation with <code>+</code>.
        </p>

        <pre>
          {`// Old way (concatenation)
"Hello " + name + "!"

// Template literal
\`Hello \${name}!\``}
        </pre>

        <p>In this project:</p>

        <pre>
          {`\`https://tinyurl.com/api-create.php?url=\${encodeURIComponent(urldata)}\``}
        </pre>

        <p>
          The user's URL is injected into the API endpoint string dynamically,
          so every request goes to the correct address.
        </p>
      </section>

      <section>
        <h2>21. encodeURIComponent()</h2>
        <p>
          URLs can only contain a limited set of characters. When a long URL is
          placed inside another URL (as a query parameter), special characters
          like <code>&</code>, <code>=</code>, <code>?</code>, <code>#</code>,
          and spaces will confuse the server — it won't know which part is the
          parameter and which is part of the original URL.
        </p>

        <p>
          <code>encodeURIComponent()</code> converts unsafe characters into
          their percent-encoded equivalents so the request arrives intact.
        </p>

        <pre>
          {`Input:   https://google.com/search?q=react js
Encoded: https%3A%2F%2Fgoogle.com%2Fsearch%3Fq%3Dreact%20js`}
        </pre>

        <p>
          Without this, a URL containing <code>&</code> would be cut off
          mid-way — TinyURL would receive an incomplete address.
        </p>
      </section>

      <section>
        <h2>22. Handling User Input</h2>
        <p>
          Same controlled input pattern from the Todo project, applied here to
          capture the URL the user wants to shorten.
        </p>

        <pre>
          {`<input
  value={urldata}
  onChange={(e) => setUrldata(e.target.value)}
/>`}
        </pre>

        <pre>
          {`User Types
      ↓
onChange fires on every keystroke
      ↓
setUrldata() updates state
      ↓
React re-renders the input with the new value`}
        </pre>

        <p>
          The input always reflects exactly what's in state — making it easy to
          read <code>urldata</code> at any moment, such as when the button is
          clicked.
        </p>
      </section>

      <section>
        <h2>23. Loading State</h2>
        <p>
          API calls are not instant. If there's no visual feedback, the user
          might click the button multiple times thinking nothing happened. A
          loading state solves this by showing a message while the request is
          in progress and hiding it once the result arrives.
        </p>

        <pre>
          {`const [loading, setLoading] = useState(false);`}
        </pre>

        <pre>
          {`// Before the request
setLoading(true);

// After the response (inside try or finally)
setLoading(false);`}
        </pre>

        <p>Then in JSX:</p>

        <pre>
          {`<button onClick={shortenUrl}>
  {loading ? "Shortening..." : "Shorten"}
</button>`}
        </pre>

        <pre>
          {`Button Clicked
      ↓
loading = true  →  Button shows "Shortening..."
      ↓
Response arrives
      ↓
loading = false  →  Button shows "Shorten" again
      ↓
Short URL appears`}
        </pre>
      </section>

      <section>
        <h2>24. Conditional Rendering with API Data</h2>
        <p>
          Before the user has shortened anything, <code>resurl</code> is an
          empty string — falsy in JavaScript. The result section should only
          appear once there's actually a URL to show.
        </p>

        <pre>
          {`{resurl && (
  <div>
    <a href={resurl} target="_blank" rel="noopener noreferrer">
      {resurl}
    </a>
  </div>
)}`}
        </pre>

        <p>
          <code>resurl && ...</code> means: "only render the JSX on the right if{" "}
          <code>resurl</code> is truthy." An empty string is falsy, so nothing
          renders. Once the API responds, <code>resurl</code> gets a real URL
          (truthy), and React renders the result automatically.
        </p>
      </section>

      <section>
        <h2>25. External Links</h2>
        <p>
          When linking to an external URL, two attributes work together for both
          usability and security:
        </p>

        <pre>
          {`<a
  href={resurl}
  target="_blank"
  rel="noopener noreferrer"
>
  {resurl}
</a>`}
        </pre>

        <ul>
          <li>
            <strong>target="_blank"</strong> — opens the link in a new browser
            tab instead of navigating away from your app.
          </li>
          <li>
            <strong>rel="noopener"</strong> — prevents the new tab from gaining
            a reference to your page via <code>window.opener</code>, which could
            be exploited to redirect your page to a malicious URL.
          </li>
          <li>
            <strong>rel="noreferrer"</strong> — additionally hides the referring
            URL from the destination site, protecting user privacy.
          </li>
        </ul>

        <p>
          Always use both together whenever you open links in a new tab.
        </p>
      </section>

      <section>
        <h2>26. End-to-End Project Flow</h2>

        <pre>
          {`User enters a long URL in the input
        ↓
onChange fires → setUrldata() updates state
        ↓
User clicks "Shorten"
        ↓
shortenUrl() function runs
        ↓
setLoading(true) → button shows "Shortening..."
        ↓
fetch() sends request to TinyURL API
        ↓
TinyURL processes the long URL
        ↓
Short URL returned in response
        ↓
setResurl() saves the short URL to state
        ↓
setLoading(false) → button resets
        ↓
React re-renders
        ↓
Short URL appears as a clickable link`}
        </pre>
      </section>

      <section>
        <h2>Concepts Learned So Far</h2>

        <p>After the Todo project and this URL Shortener, you have covered:</p>

        <ul>
          <li>JSX</li>
          <li>Functional Components</li>
          <li>useState</li>
          <li>Controlled Components</li>
          <li>Event Handling</li>
          <li>Arrays &amp; Objects</li>
          <li>map()</li>
          <li>filter()</li>
          <li>Conditional Rendering</li>
          <li>Ternary Operator</li>
          <li>React Router</li>
          <li>Layout &amp; Outlet</li>
          <li>APIs</li>
          <li>Fetch API</li>
          <li>Async / Await</li>
          <li>Promises</li>
          <li>try / catch</li>
          <li>Template Literals</li>
          <li>encodeURIComponent()</li>
          <li>Loading States</li>
          <li>API Response Handling</li>
          <li>External Links</li>
          <li>Network Requests</li>
        </ul>
      </section>
    </div>
  );
};

export default LearnURLShortener;
