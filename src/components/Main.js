import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import randomColor from "randomcolor";
function Main({ color, setColor }) {
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
        let colorr = randomColor();
        setColor(colorr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div id="quote-box">
        <div className="quote">
          <p id="text" style={{ color }}>
            <span id="icon">
              <FaQuoteLeft />
            </span>
            &nbsp; {quote}
          </p>
        </div>
        <div className="author-name">
          <p id="author" style={{ color }}>
            ~ {authorName}
          </p>
        </div>
        <div className="links">
          <a
            href="https://www.twitter.com/intent/tweet"
            target="_top  "
            id="tweet-quote"
            className="btn"
            style={{ backgroundColor: color }}
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            onClick={handleReq}
            id="new-quote"
            className="btn"
            style={{ backgroundColor: color }}
          >
            New Quote
          </a>
        </div>
      </div>
      <h4 id="dev">by Tarun ✌</h4>
    </>
  );
}

export default Main;
