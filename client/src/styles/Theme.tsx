import { ThemeProvider } from 'styled-components';

import useThemeStore from '@/stores/ThemeStore';

import dark from './themes/dark';
import light from './themes/light';

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [themeName] = useThemeStore((state) => [state.theme]);
  const theme = themeName === 'light' ? light : dark;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
