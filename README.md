# react-journey

learn-react-by-project

A multi-page React app built while learning React 19 from scratch — one project at a time. Each route is a standalone mini-project that introduced new concepts, starting from basic `useState` all the way to API calls, async/await, and React Router.

---

## Live Projects

| Project | Route | Concepts Covered |
|---|---|---|
| Home | `/` | React Router, child routes, SVG connectors |
| Todo App | `/todo` | useState, map(), filter(), controlled inputs |
| URL Shortener | `/urlshortener` | fetch(), async/await, Promises, try/catch |
| GitHub Finder | `/githubfinder` | Object state, dynamic APIs, response.json() |
| My Profile | `/profile` | useLoaderData, loader functions, GitHub API |

---

## Tech Stack

- **React 19**
- **React Router v7**
- **Vite**
- **Vanilla CSS**
- **TinyURL API**
- **GitHub REST API**

---

## What I Learned

### From the Todo App
`useState` · `map()` · `filter()` · controlled inputs · event handling · conditional rendering · ternary operator · arrays of objects · React Router · Layout & Outlet

### From the URL Shortener
`fetch()` · `async/await` · Promises · `try/catch` · template literals · `encodeURIComponent()` · loading states · API response handling · external links

### From the GitHub Finder
Object state · dynamic API URLs · `response.json()` · `Object.keys()` · rendering external images · React re-render cycle

### From the Profile Page
`useLoaderData` · loader functions · data fetching before render · GitHub API

---

## Getting Started

```bash
git clone https://github.com/prempscode/react-journey.git
cd react-journey
npm install
npm run dev
```

---

## Project Structure

```
src/
├── App.jsx                  # Router config with all routes
├── Components/
│   ├── Home/                # Landing page with bio + route cards
│   ├── Layout/              # Shared navbar + footer
│   ├── Todo/                # Todo app + learn notes
│   ├── Url/                 # URL shortener + learn notes
│   ├── GithubFinder/        # GitHub finder + learn notes
│   └── Profile/             # GitHub profile with loader
└── Pages/
    └── NoPage/              # 404 page
```

---

## Author

**Prem Pravash Sahu**  
BCA — Institute of Technical Education and Research 

> Every line in this project was written while learning React for the very first time.
