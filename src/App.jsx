import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
