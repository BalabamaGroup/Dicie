import { ComponentColor, ComponentTheme } from '@/common/types/theme';
import useComponentTheme from '@/hooks/useComponentTheme';

import { darkComponentTheme, lightComponentTheme } from './componentTheme';
import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'medium' | 'small';
  theme?: ComponentTheme;
  color?: ComponentColor;
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  theme = 'auto',
  color = 'indigo',
}: ToggleProps) => {
  const componentTheme = useComponentTheme({
    theme,
    color,
    lightComponentTheme,
    darkComponentTheme,
  });

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
