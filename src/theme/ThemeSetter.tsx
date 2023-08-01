import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ToggleButton } from "../toggleButton";

export function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ToggleButton
      label=" DARK "
      toggled={theme === "dark" ? true : false}
      onClick={(value) => {
        setTheme(value ? "dark" : "light");
      }}
    />
  );
}
