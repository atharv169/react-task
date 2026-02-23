import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "My First Hook App";
    console.log(document.title);
  }, []); //show that empty array with show the run the useEffect only once at initial render
  return <div className="App"></div>;
}
