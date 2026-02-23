import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./task-6-useEffect/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
