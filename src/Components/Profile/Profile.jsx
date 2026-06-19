import React from "react";
import { useLoaderData } from "react-router-dom";
import achievement1 from "../../Images/achievement1.1.png";
import achievement2 from "../../Images/achievement2.png";
import achievement3 from "../../Images/achievement3.png";
import "./Profile.css";
import LearnProfile from "./LearnProfile";

function Profile() {
  const user = useLoaderData();

  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="profile-avatar"
          />

          <h2>{user.name || user.login}</h2>

          <p className="username">@{user.login}</p>

          <p className="bio">{user.bio || "No bio available"}</p>
        </div>

        <div className="profile-stats">
          <div className="stat">
            <h3>{user.public_repos}</h3>
            <span>Repositories</span>
          </div>
        </div>

        <div className="profile-info">
          <p>
            <strong>Location:</strong> {user.location || "Not specified"}
          </p>

          <p>
            <strong>Company:</strong> {user.company || "Not specified"}
          </p>

          <p>
            <strong>Portfolio:</strong> {<a>{user.blog}</a> || "Not specified"}
          </p>
        </div>

        <div className="achievements">
          <h3>Earned Achievements</h3>

          <div className="achievement-grid">
            <div className="achievement-card">
              <img src={achievement1} alt="Pair Extraordinaire" />

              <h4>Pair Extraordinaire</h4>

              <span className="badge-count">x3</span>
            </div>

            <div className="achievement-card">
              <img src={achievement2} alt="YOLO" />

              <h4>YOLO</h4>
            </div>

            <div className="achievement-card">
              <img src={achievement3} alt="Quickdraw" />

              <h4>Quickdraw</h4>
            </div>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          View GitHub Profile
        </a>
      </div>
      <LearnProfile></LearnProfile>
    </>
  );
}

export default Profile;
