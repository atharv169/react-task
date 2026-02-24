import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(id);
  }, []);
  return <div className="App">{show && <p>Hello</p>}</div>;
}
