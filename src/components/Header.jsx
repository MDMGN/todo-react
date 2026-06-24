import useTheme from "../theme/useTheme";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const theme = useTheme();
  return (
    <header className="app-header">
      <div>
        <p className="app-label">Curso React</p>
        <h1 className={theme.title}>Todo App con React</h1>
      </div>
      <div className="app-btn-darkMode-container">
        <DarkModeButton />
      </div>
    </header>
  );
}
