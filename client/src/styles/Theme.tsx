import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import dark from "./themes/dark";
import light from "./themes/light";

const Theme = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState<string>("auto");

  useEffect(() => {
    const themeListener = () => {
      const theme = localStorage.getItem("theme");

      if (theme === "light" || theme === "dark") {
        setTheme(theme);
      } else if (theme === "auto") {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) setTheme("dark");
        else setTheme("light");
      }
    };

    window.addEventListener("storage", themeListener);
    return () => window.removeEventListener("storage", themeListener);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
