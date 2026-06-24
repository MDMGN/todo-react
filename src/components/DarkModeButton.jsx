import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import useTheme from "../theme/useTheme";

export default function DarkModeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const currentTheme = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={currentTheme.darkModeButton}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <SunIcon theme={currentTheme} />
      ) : (
        <MoonIcon theme={currentTheme} />
      )}
    </button>
  );
}
