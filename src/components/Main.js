import React, { useState, useEffect } from "react";
import "../Styles/main.css";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
function Main() {
  const [quote, setQuote] = useState("");
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((res) => {
      setQuote(res.data.content);
      setAuthorName(res.data.author);
    });
  }, []);
  return (
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
    </div>
  );
}

export default Main;
