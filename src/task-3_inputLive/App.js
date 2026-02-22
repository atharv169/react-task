import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Type something"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <p>You type : {inputValue}</p>
    </div>
  );
}
