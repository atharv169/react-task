import { useState } from "react";
import "./styles.css";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {toggle && (
        <p>
          Life is a small collection of moments that slowly shape who we become.
          Some days feel ordinary, but even the smallest experiences teach us
          something new. A short walk, a quiet thought, or a simple conversation
          can change our mood and direction without us realizing it. Growth does
          not always come from big achievements; most of the time, it comes from
          staying consistent, learning from mistakes, and choosing to move
          forward even when things feel uncertain.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
}
