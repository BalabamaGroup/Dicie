import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import useThemeController from "../app/hooks/useThemeController";

import dark from "./themes/dark";
import light from "./themes/light";

const Theme = ({ children }: { children: any }) => {
  const { getTheme } = useThemeController();

  const [theme, setTheme] = useState<string | undefined>(getTheme());

  useEffect(() => {
    const themeListener = () => {
      const theme = getTheme();
      theme && setTheme(theme);
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
