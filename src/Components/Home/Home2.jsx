import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="component-card app-card">
        <pre>
          {`const App = () => {
  return (
    <Developer
      name="Prem Pravash Sahu"
      role="Aspiring FullStack Developer"
    />
  );
};`}
        </pre>
      </div>

      <div className="vertical-line"></div>

      <div className="component-card profile-card-home">
        <h2>{"<UserProfile />"}</h2>

        <pre>
          {`const UserProfile = {
  name: "Prem Pravash Sahu",
  college: "ITER College",
  cgpa: "9.77"
}`}
        </pre>
      </div>

      <div className="branch-line"></div>

      <div className="info-grid">
        <div className="component-card">
          <h2>{"<Education />"}</h2>

          <pre>
            {`const Education = {
  degree: "BCA",
  cgpa: "9.77",
  year: "2024-2027"
}`}
          </pre>
        </div>

        <div className="component-card">
          <h2>{"<Skills />"}</h2>

          <pre>
            {`const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node Js",
  "MongoDB",
  "MySQL" ,
  "PostgreSQL",
  "Java",
  "Python",
];`}
          </pre>
        </div>

        <div className="component-card">
          <h2>{"<Goal />"}</h2>

          <pre>
            {`const Goal = () => {
  return (
    "Become a MERN Stack
          Developer"
  );
};`}
          </pre>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="projects-section">
        <div className="component-card">
          <h2>{"<Projects />"}</h2>

          <pre>
            {`const routes = [
 "/todo",
 "/url-shortener",
 "/github-finder"
];`}
          </pre>
        </div>

        <div className="project-connector"></div>

        <div className="project-nodes">
          <Link to="/todo" className="project-node">
            {"<Todo />"}
          </Link>

          <Link to="/urlshortener" className="project-node">
            {"<UrlShortener />"}
          </Link>

          <Link to="/githubfinder" className="project-node">
            {"<GithubFinder />"}
          </Link>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="component-card thankyou">
        <h2>{"<ThankYou />"}</h2>

        <pre>
          {`export default function
ThankYou() {
  return (
    "Thank you for
    visiting my Learn React Project"
  );
}`}
        </pre>
      </div>
    </div>
  );
}

export default Home;
