import { ComponentColor } from '@/common/types/theme';
import { useThemeStore } from '@/stores/ThemeStore';
import toggleTheme from '@/styles/themes/componentThemes/toggleTheme';

import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'medium' | 'small';
  color: ComponentColor;
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  color,
}: ToggleProps) => {
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = toggleTheme[theme][color];

  return (
    <Styled.ToggleWrapper
      className={className}
      value={value}
      onClick={onChange}
      size={size}
      theme={componentTheme}
    >
      <Styled.Toggle value={value} size={size} theme={componentTheme} />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
