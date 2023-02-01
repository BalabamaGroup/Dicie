import { useTheme } from 'styled-components';

const useComponentTheme = (
  theme: 'auto' | 'light' | 'dark',
  lightComponentTheme: any,
  darkComponentTheme: any
) => {
  const autoTheme: any = useTheme();

  if ((theme === 'auto' && autoTheme.name === 'light') || theme === 'light')
    return lightComponentTheme;

  return darkComponentTheme;
};

export default useComponentTheme;
