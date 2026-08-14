"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

const THEME_KEY = "theme";
const THEME_EVENT = "theme-change";

export type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribe(onStoreChange: () => void) {
  // "storage" fires in other tabs; "theme-change" notifies the same tab
  // after a local write (storage events don't fire in the originating tab).
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
  };
}

function getSnapshot(): Theme {
  return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}

// Used during SSR and hydration so the client HTML matches the server,
// avoiding hydration mismatches. The real value is read right after mount.
function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep the DOM class in sync with the theme.
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  const setTheme = (next: Theme) => {
    localStorage.setItem(THEME_KEY, next);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
