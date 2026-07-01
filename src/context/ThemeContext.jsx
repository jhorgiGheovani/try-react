import { createContext, useContext, useState } from "react";
import { atom, useAtom } from "jotai";

// ==============================
// Implementation 1: useContext
// ==============================
export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// ==============================
// Implementation 2: Jotai
// ==============================
export const isDarkAtom = atom(false);

export function useThemeJotai() {
  const [isDark, setIsDark] = useAtom(isDarkAtom);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return { isDark, toggleTheme };
}
