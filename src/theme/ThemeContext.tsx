import React, { useEffect, useState } from "react";
import { LocalStorageNames } from "../localstorage.enum";

interface ThemeContextData {
  theme: string;
  setTheme: (value: string) => void;
}

const initialThemeState = {
  theme: localStorage.getItem(LocalStorageNames.globalTheme) || "dark",
  setTheme: () => {},
};

export const ThemeContext =
  React.createContext<ThemeContextData>(initialThemeState);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    localStorage.setItem(LocalStorageNames.globalTheme, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
