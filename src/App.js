import React, { useState } from "react";
import Main from "./components/Main";
import "./Styles/app.css";

function App() {
  const [color, setColor] = useState("");
  return (
    <div id="App" style={{ backgroundColor: color }}>
      <Main setColor={setColor} color={color} />
    </div>
  );
}

export default App;
