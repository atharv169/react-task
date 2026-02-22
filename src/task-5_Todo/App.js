import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  function handleDelete(indexToDelete) {
    const newTodos = todo.filter((_, index) => index != indexToDelete);
    setTodo(newTodos);
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add todo task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text.trim() === "") return;
          setTodo([...todo, text]);
          setText("");
        }}
      >
        Add
      </button>

      <div>
        {todo.map((item, index) => (
          <div key={index}>
            <spam>{item}</spam>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
