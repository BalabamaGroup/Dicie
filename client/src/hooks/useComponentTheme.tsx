import { useTheme } from 'styled-components';

import {
  ComponentColor,
  ComponentTheme,
  ComponentThemes,
} from '@/common/types/theme';

interface useComponentThemeProps {
  theme: ComponentTheme;
  color?: ComponentColor;
  lightComponentTheme: any;
  darkComponentTheme: any;
}

const useComponentTheme = ({
  theme,
  color,
  lightComponentTheme,
  darkComponentTheme,
}: useComponentThemeProps) => {
  const autoTheme: any = useTheme();

  const isLight =
    (theme === ComponentThemes.auto &&
      autoTheme.name === ComponentThemes.light) ||
    theme === ComponentThemes.light;

  let componentTheme;

  if (isLight) componentTheme = lightComponentTheme;
  else componentTheme = darkComponentTheme;

  if (color && componentTheme[color]) componentTheme = componentTheme[color];

  return componentTheme;
};

export default useComponentTheme;
