import React, { useState } from "react";
import "./GithubFinder.css";
import LearnGitHubFinder from "./LearnGitHubFinder";

const GithubFinder = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    if (username.trim() === "") return;
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();

      setProfile(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      <div className="github-container">
        <h1>GitHub Finder</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button onClick={fetchProfile}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {Object.keys(profile).length > 0 ? (
          <div className="profile-card">
            <img src={profile.avatar_url} alt={profile.login} />

            <h2>{profile.name}</h2>

            <p className="username">@{profile.login}</p>

            <p className="bio">{profile.bio}</p>

            <div className="stats">
              <div>
                <h3>{profile.followers}</h3>
                <span>Followers</span>
              </div>

              <div>
                <h3>{profile.following}</h3>
                <span>Following</span>
              </div>

              <div>
                <h3>{profile.public_repos}</h3>
                <span>Repos</span>
              </div>
            </div>

            <a href={profile.html_url} target="_blank">
              View Profile
            </a>
          </div>
        ) : (
          <p className="placeholder">Search for a GitHub user</p>
        )}
      </div>

      <LearnGitHubFinder></LearnGitHubFinder>
    </>
  );
};

export default GithubFinder;
