import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="btn">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn">
        -
      </button>
    </div>
  );
}
