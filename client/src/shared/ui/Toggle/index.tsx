import useComponentTheme from '@/shared/hooks/useComponentTheme';

import { ToggleThemeDark, ToggleThemeLight } from './componentTheme';
import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'medium' | 'small';
  theme?: 'auto' | 'dark' | 'light';
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  theme = 'auto',
}: ToggleProps) => {
  const componentTheme = useComponentTheme(
    theme,
    ToggleThemeLight,
    ToggleThemeDark
  );

  return (
    <Styled.ToggleWrapper
      className={className}
      value={value}
      onClick={onChange}
      size={size}
      componentTheme={componentTheme}
    >
      <Styled.Toggle
        value={value}
        size={size}
        componentTheme={componentTheme}
      />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
