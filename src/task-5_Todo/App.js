import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add todo task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={() => setTodo([...todo, text])}>Add</button>
      <div>
        {todo.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
