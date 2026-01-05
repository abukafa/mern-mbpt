import { useEffect, useState } from "react";
import { UIContext } from "./UIContext";

export function UIProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [audience, setAudience] = useState(
    localStorage.getItem("audience") || "adult"
  );

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme class to <html> for dark mode variants to work
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("audience", audience);
  }, [audience]);

  return (
    <UIContext.Provider
      value={{
        theme,
        audience,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
        toggleAudience: () =>
          setAudience(audience === "adult" ? "kids" : "adult"),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
