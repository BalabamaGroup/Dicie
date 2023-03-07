import React, { MouseEventHandler } from 'react';
import { useTheme } from 'styled-components';

import { ComponentColor } from '@/common/types/theme';

import * as Styled from './index.styled';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  size?: 'large' | 'medium' | 'small';
  theme?: 'auto' | 'light' | 'dark';
  color?: ComponentColor;
  isPrimary?: boolean;
  isOutline?: boolean;
  isDisabled?: boolean;
  isScale?: boolean;
}

const Button = ({
  className,
  children,
  onClick,
  size = 'medium',
  color,
  isPrimary = false,
  isOutline = false,
  isDisabled = false,
  isScale = false,
}: ButtonProps) => {
  let theme: any = useTheme();
  theme = theme.button[color || theme.button.default];

  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      size={size}
      theme={theme}
      color={color}
      isPrimary={isPrimary}
      isOutline={isOutline}
      disabled={isDisabled}
      isScale={isScale}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
