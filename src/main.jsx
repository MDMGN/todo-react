import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TODOProvider } from "./context/TODOContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/**Theme Provider */}
    <ThemeProvider>
      {/**Todos Provider */}
      <TODOProvider>
        <App />
      </TODOProvider>
    </ThemeProvider>
  </StrictMode>,
);
