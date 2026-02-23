import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./task-7-useEffect_count/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
