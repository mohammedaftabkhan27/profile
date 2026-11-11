
import React, { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <div className="container">

        <h1>Counter Application</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <p className="theme-status">
          Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
        </p>

        <div className="counter-box">
          <h2>{count}</h2>
          <p>Current Count</p>
        </div>

        <div className="buttons">

          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button className="decrement" onClick={decrement}>
            - Decrement
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
