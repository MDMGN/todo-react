import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import useTheme from "../theme/useTheme";

export default function DarkModeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const currentTheme = useTheme();

  return (
    <span
      className="btn-darkMode"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <SunIcon theme={currentTheme} />
      ) : (
        <MoonIcon theme={currentTheme} />
      )}
    </span>
  );
}
