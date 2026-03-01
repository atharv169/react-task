import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth)
    }

    //add listener
    window.addEventListener("resize",handleResize);

    //cleaup
    return () => {
      window.removeEventListener("resize",handleResize);
    };
  }, []);

  return <div className="App">Window width : {width}px</div>;
}
