import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TODOProvider } from "./context/TODOContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TODOProvider>
      <App />
    </TODOProvider>
  </StrictMode>,
);
