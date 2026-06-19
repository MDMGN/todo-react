import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { themes } from "./themes";

export default function useTheme() {
  const { theme } = useContext(ThemeContext);

  return themes[theme /* === "dark" ? "dark" : "light" */];
}
