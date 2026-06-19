import React, { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const CodeCard = ({ tag, children, accent, cardRef }) => (
  <div className="cc" style={{ "--accent": accent }} ref={cardRef}>
    <div className="cc-bar">
      <span className="cc-dot" />
      <span className="cc-dot" />
      <span className="cc-dot" />
      <span className="cc-tag">{tag}</span>
    </div>
    <pre className="cc-body">{children}</pre>
  </div>
);

const RouteCard = ({ to, icon, label, desc, snippet }) => (
  <Link to={to} className="route-card">
    <div className="route-card__head">
      <span className="route-card__icon">{icon}</span>
      <span className="route-card__label">{label}</span>
      <span className="route-card__arrow">→</span>
    </div>
    <p className="route-card__desc">{desc}</p>
    <pre className="route-card__snippet">{snippet}</pre>
  </Link>
);

export default function Home() {
  const spineRef = useRef(null);
  const svgRef = useRef(null);

  const nameRef = useRef(null);
  const collegeRef = useRef(null);
  const skillsRef = useRef(null);
  const goalRef = useRef(null);
  const thanksRef = useRef(null);

  const drawLines = useCallback(() => {
    const svg = svgRef.current;
    const spine = spineRef.current;
    if (!svg || !spine) return;

    const cardRefs = [nameRef, collegeRef, skillsRef, goalRef, thanksRef];
    const colors = ["#0071e3", "#30d158", "#bf5af2", "#ff9f0a", "#ff375f"];

    const spineRect = spine.getBoundingClientRect();
    svg.setAttribute("width", spineRect.width);
    svg.setAttribute("height", spineRect.height);

    let defs = "";
    let paths = "";

    for (let i = 0; i < cardRefs.length - 1; i++) {
      const fromEl = cardRefs[i].current;
      const toEl = cardRefs[i + 1].current;
      if (!fromEl || !toEl) continue;

      const fr = fromEl.getBoundingClientRect();
      const tr = toEl.getBoundingClientRect();

      const x1 = fr.left + fr.width / 2 - spineRect.left;
      const y1 = fr.bottom - spineRect.top;
      const x2 = tr.left + tr.width / 2 - spineRect.left;
      const y2 = tr.top - spineRect.top;
      const cy = (y1 + y2) / 2;

      const color = colors[i];
      const mid = `mk${i}`;

      defs += `<marker id="${mid}" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><circle cx="3" cy="3" r="2" fill="${color}" opacity="1"/></marker>`;
      paths += `<path d="M ${x1} ${y1} C ${x1} ${cy}, ${x2} ${cy}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="6 4" opacity="0.9" marker-end="url(#${mid})"/>`;
    }

    svg.innerHTML = `<defs>${defs}</defs>${paths}`;
  }, [nameRef, collegeRef, skillsRef, goalRef, thanksRef, spineRef, svgRef]);

  useEffect(() => {
    const t = setTimeout(drawLines, 80);
    window.addEventListener("resize", drawLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", drawLines);
    };
  }, [drawLines]);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__eyebrow">
          React 19 · React Router · SF Pro
        </div>
        <h1 className="home-hero__name">Prem Pravash Sahu</h1>
        <p className="home-hero__sub">
          Building interfaces one component at a time.
        </p>
      </section>

      <div className="bio-spine" ref={spineRef}>
        <svg
          ref={svgRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            overflow: "visible",
            filter: "drop-shadow(0 0 6px currentColor)",
          }}
        />
        <CodeCard tag="<Name />" accent="#0071e3" cardRef={nameRef}>
          {`function Name() {
  return (
    <h1>Prem Pravash Sahu</h1>
  );
}`}
        </CodeCard>

        <CodeCard tag="<College />" accent="#30d158" cardRef={collegeRef}>
          {`function College() {
  return (
    <div>
      <p>Institute of Technical Education
         and Research</p>
      <p>BCA — Computer Application</p>
      <p>CGPA — 9.77 / 10</p>
    </div>
  );
}`}
        </CodeCard>

        <CodeCard tag="<Skills />" accent="#bf5af2" cardRef={skillsRef}>
          {`const skills = [
  "HTML5", "CSS",
  "React 19", "JavaScript (ES6+)",
  "Java", "Git & GitHub",
  "MongoDB", "MySQL",
  "PostgreSQL", "Python",
];`}
        </CodeCard>

        <CodeCard tag="<WebsiteGoal />" accent="#ff9f0a" cardRef={goalRef}>
          {`function WebsiteGoal() {
  return (
    <p>
      Learn React from the basics —
      one project at a time, starting
      from useState all the way to
      APIs, routing, and beyond.
    </p>
  );
}`}
        </CodeCard>

        <CodeCard tag="<ThankYou />" accent="#ff375f" cardRef={thanksRef}>
          {`export default function ThankYou() {
  return (
    <p>
      Thanks for visiting ✦
      Every line here was written
      while learning React for the
      very first time.
    </p>
  );
}`}
        </CodeCard>
      </div>

      <section className="routes-section">
        <div className="routes-section__header">
          <span className="routes-section__eyebrow">
            React Router · child routes
          </span>
          <h2 className="routes-section__title">Projects inside this app</h2>
          <p className="routes-section__sub">
            Each card is a <code>&lt;Route&gt;</code> nested under the root
            layout. Click to visit the live project.
          </p>
        </div>

        {/* router diagram strip */}
        <div className="router-diagram">
          <div className="rd-root">
            <code>{'<Route path="/">'}</code>
            <span className="rd-root__label">Layout</span>
          </div>
          <div className="rd-children">
            {[
              { label: "home", path: "/" },
              { label: "todo", path: "/Todo" },
              { label: "urlshortener", path: "/urlshortener" },
              { label: "githubfinder", path: "/githubfinder" },
              { label: "profile", path: "/profile" },
            ].map((r) => (
              <Link key={r.path} to={r.path} className="rd-child">
                <code>{r.label}</code>
              </Link>
            ))}
          </div>
        </div>

        {/* project cards grid */}
        <div className="route-cards-grid">
          <RouteCard
            to="/Todo"
            icon="✓"
            label="Todo App"
            desc="useState · map() · filter() · controlled inputs"
            snippet={`const [tasks, setTasks] =\n  useState([]);`}
          />
          <RouteCard
            to="/urlshortener"
            icon="⇢"
            label="URL Shortener"
            desc="fetch() · async/await · Promises · try/catch"
            snippet={`const res = await fetch(\n  tinyurl + url\n);`}
          />
          <RouteCard
            to="/githubfinder"
            icon="◎"
            label="GitHub Finder"
            desc="Object state · dynamic APIs · response.json()"
            snippet={`const [profile,\n  setProfile] = useState({});`}
          />
          <RouteCard
            to="/profile"
            icon="◉"
            label="My Profile"
            desc="useLoaderData · loader functions · GitHub API"
            snippet={`loader: githubProfileLoader\nuseLoaderData()`}
          />
        </div>
      </section>
    </div>
  );
}
