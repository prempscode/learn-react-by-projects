import React, { useState } from "react";
import "./UrlShortener.css";
import LearnURLShortener from './LearnURLShortener';


const UrlShortener = () => {
  const [urldata, setUrldata] = useState("");
  const [resurl, setResurl] = useState("");
  const [loading, setLoading] = useState(false);

  const shortenUrl = async () => {
    if (!urldata.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(urldata)}`,
      );

      const shortUrl = await response.text();
      setResurl(shortUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="urlsh-container">
        <h1>URL Shortener</h1>

        <input
          type="text"
          placeholder="Enter URL..."
          value={urldata}
          onChange={(e) => setUrldata(e.target.value)}
        />

        <button onClick={shortenUrl}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>

        {resurl && (
          <div className="result-container">
            <p>Short URL:</p>

            <a href={resurl} target="_blank">
              {resurl}
            </a>
          </div>
        )}
      </div>

      <LearnURLShortener></LearnURLShortener>
    </>
  );
};

export default UrlShortener;
