import { useTheme } from 'styled-components';

import { ComponentColor, ComponentTheme } from '@/common/types/theme';

import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'medium' | 'small';
  color?: ComponentColor;
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  color,
}: ToggleProps) => {
  let theme: any = useTheme();
  theme = theme.toggle[color || theme.toggle.default];

  return (
    <Styled.ToggleWrapper
      className={className}
      value={value}
      onClick={onChange}
      size={size}
      theme={theme}
    >
      <Styled.Toggle value={value} size={size} theme={theme} />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
