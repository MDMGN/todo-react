import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import TodoPage from "../pages/TodoPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<TodoPage />} />
    </Routes>
  );
}
