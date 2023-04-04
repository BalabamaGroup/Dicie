import { ComponentColor } from '@/common/types/theme';
import { useThemeStore } from '@/stores/ThemeStore';
import scrollTheme from '@/styles/themes/componentThemes/scrollTheme';

import * as Styled from './index.styled';

interface ScrollProps {
  color: ComponentColor;
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Scroll = ({
  color,
  className,
  children,
  align = 'center',
}: ScrollProps) => {
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = scrollTheme[theme][color];

  return (
    <Styled.Scroll theme={componentTheme} className={className} align={align}>
      {children}
    </Styled.Scroll>
  );
};

export default Scroll;
