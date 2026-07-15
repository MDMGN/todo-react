import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./router/AppRoutes";
import useAthStore from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  const login = useAthStore((state) => state.login);

  useEffect(() => {
    login();
  }, [login]);

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
