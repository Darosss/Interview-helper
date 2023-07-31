import React, { useEffect, useState } from "react";

interface ThemeContextData {
  theme: string;
  setTheme: (value: string) => void;
}

const initialThemeState = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext =
  React.createContext<ThemeContextData>(initialThemeState);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(initialThemeState.theme);

  const localStorage = window.localStorage;

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if (!savedThemeLocal) {
      setTheme(savedThemeLocal || "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
