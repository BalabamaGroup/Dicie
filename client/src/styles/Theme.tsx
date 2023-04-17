import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import useThemeStore from '@/stores/ThemeStore';

import dark from './themes/dark';
import light from './themes/light';

const Theme = ({ children }: { children: any }) => {
  const [theme] = useThemeStore((state) => [state.theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
