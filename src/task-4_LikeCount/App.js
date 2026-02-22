import { useState } from "react";
import "./styles.css";

export default function App() {
  const [like, setLike] = useState(0);
  return (
    <div className="App">
      <p>{like}</p>
      <button onClick={() => setLike(like + 1)}>Like</button>
    </div>
  );
}
