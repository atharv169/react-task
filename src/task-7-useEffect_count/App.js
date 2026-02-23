import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "My";
    console.log(document.title);
  }, [count]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
