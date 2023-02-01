import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import useTheme from '@/shared/hooks/useTheme';

import dark from './themes/dark';
import light from './themes/light';

const Theme = ({ children }: { children: any }) => {
  const { getTheme, getBrowserTheme } = useTheme();

  const [theme, setTheme] = useState<string | null>(getTheme());

  useEffect(() => {
    const themeListener = () => {
      const theme = getTheme;
      setTheme(theme);
    };

    window.addEventListener('storage', themeListener);
    return () => window.removeEventListener('storage', themeListener);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
