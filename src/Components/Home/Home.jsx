import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="section1">
        <div className="heading">Prem Pravash Sahu</div>
        <div className="content">
          <div className="description">
            <p>
              This project is for everyone who is starting with React and wants
              to learn by building real projects — not just reading about it.
            </p>
            <p className="c-snippet">
              <code>Stop watching tutorials. Start shipping components.</code>
            </p>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="heading">
          <h3>
            What you will <code>Learn</code> {":)"}{" "}
          </h3>
        </div>
        <div className="content">
          <div className="description">
            <p>
              -This is a multi-page React app built from scratch while learning
              React 19 for the first time. Every route in this app is a real
              project — not a copy-paste exercise, but something that actually
              had to work.
            </p>
            <p>
              -It started with a Todo App. Small, simple, but enough to
              understand the core idea — that in React, state drives everything.
              Change the state, the UI follows. That one idea unlocked
              everything else.
            </p>
            <p>
              -Next came the URL Shortener. For the first time, the app had to
              talk to the outside world. That meant learning fetch(),
              async/await, Promises, and how to handle things that can go wrong
              — no internet, server down, bad response. Real problems with real
              solutions.
            </p>
            <p>
              -Then the GitHub Finder. Type a username, hit search, and a full
              profile appears — avatar, followers, links. The API returns a
              complete object, and storing that as a single state variable
              instead of five separate ones finally made object state click.
            </p>
            <p>
              -Each project introduced something new. Each bug taught something
              that documentation alone never could. This is what learning React
              looks like when you stop watching and start building.
            </p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="heading">
          <h3>Projects you will Build!</h3>
        </div>

        {/* <div className="cards">
          <div className="card">
            <pre>{`const [task, setTask] = useState("");
const [alltask, setAlltask] = useState([]);

alltask.map((item, index) => (
  <p key={index}>{item.text}</p>
));

setAlltask([...alltask,
  { text: task, completed: false }
]);`}</pre>
            <h5>
              <code>Todo App</code>
            </h5>
          </div>

          <div className="card">
            <pre>{`const response = await fetch(
  \`tinyurl.com/api?url=
    \${encodeURIComponent(url)}\`
);

const short = await response.text();
setResurl(short);`}</pre>
            <h5>
              <code>URL Shortener</code>
            </h5>
          </div>

          <div className="card">
            <pre>{`const [profile, setProfile] =
  useState({});

const res = await fetch(
  \`api.github.com/users/\${username}\`
);
const data = await res.json();
setProfile(data);`}</pre>
            <h5>
              <code>GitHub Finder</code>
            </h5>
          </div>

          <div className="card">
            <pre>{`export async function loader() {
  const res = await fetch(
    "api.github.com/users/prempscode"
  );
  return res.json();
}

const profile = useLoaderData();`}</pre>
            <h5>
              <code>Profile Datafetching</code>
            </h5>
          </div>
        </div> */}

        <div className="cards">
          <Link to="/Todo" className="card">
            <pre>{`const [task, setTask] = useState("");
const [alltask, setAlltask] = useState([]);

alltask.map((item, index) => (
  <p key={index}>{item.text}</p>
));

setAlltask([...alltask,
  { text: task, completed: false }
]);`}</pre>
            <h5>
              <code>Todo App</code>
            </h5>
          </Link>

          <Link to="/urlshortener" className="card">
            <pre>{`const response = await fetch(
  \`tinyurl.com/api?url=
    \${encodeURIComponent(url)}\`
);

const short = await response.text();
setResurl(short);`}</pre>
            <h5>
              <code>URL Shortener</code>
            </h5>
          </Link>

          <Link to="/githubfinder" className="card">
            <pre>{`const [profile, setProfile] =
  useState({});

const res = await fetch(
  \`api.github.com/users/\${username}\`
);
const data = await res.json();
setProfile(data);`}</pre>
            <h5>
              <code>GitHub Finder</code>
            </h5>
          </Link>

          <Link to="/profile" className="card">
            <pre>{`export async function loader() {
  const res = await fetch(
    "api.github.com/users/prempscode"
  );
  return res.json();
}

const profile = useLoaderData();`}</pre>
            <h5>
              <code>Profile Datafetching</code>
            </h5>
          </Link>
        </div>
      </div>

      <div className="footer">
        <div className="donate">
          Show your support by adding a star on{" "}
          <a href="https://github.com/prempscode" target="_blank">
            <code>GitHub- prempscode &#9733; </code>
          </a>
        </div>
        <div className="message">Thank you for visiting!</div>
      </div>
    </div>
  );
};

export default Home;
