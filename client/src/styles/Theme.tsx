import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useThemeStore } from '@/stores/ThemeStore';

import dark from './themes/dark';
import light from './themes/light';

const Theme = ({ children }: { children: any }) => {
  const [theme, setAutoTheme, setLightTheme, setDarkTheme] = useThemeStore(
    (state) => [
      state.theme,
      state.setAutoTheme,
      state.setLightTheme,
      state.setDarkTheme,
    ]
  );

  useEffect(() => {
    const themeFromLS = localStorage.getItem('theme');
    if (themeFromLS === 'light') setLightTheme();
    else if (themeFromLS === 'dark') setDarkTheme();
    else setAutoTheme();
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
