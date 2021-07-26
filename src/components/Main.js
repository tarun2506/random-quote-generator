import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
function Main() {
  const [quote, setQuote] = useState("");
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthorName(res.data.author);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleReq = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setAuthorName(res.data.author);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div id="quote-box">
        <div className="quote">
          <p id="text">
            <span id="icon">
              <FaQuoteLeft />
            </span>
            &nbsp; {quote}
          </p>
        </div>
        <div className="author-name">
          <p id="author">~ {authorName}</p>
        </div>
        <div className="links">
          <a
            href="twitter.com/intent/tweet"
            target="_top"
            id="tweet-quote"
            className="btn"
          >
            <FaTwitter />
          </a>
          <a href="#" onClick={handleReq} id="new-quote" className="btn">
            New Quote
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;
