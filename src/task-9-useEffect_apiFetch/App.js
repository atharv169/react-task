import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  }, []);

  return (
  <div className="App">
    <h1>Posts</h1>
    <ul>
      {data.map((post)=>(
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
  </div>
  );
}
