import React, { MouseEventHandler } from 'react';

import useComponentTheme from '@/hooks/useComponentTheme';

import { ButtonThemeDark, ButtonThemeLight } from './componentTheme';
import * as Styled from './index.styled';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  size?: 'large' | 'medium' | 'small';
  theme?: 'auto' | 'light' | 'dark';
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
  theme = 'auto',
  isPrimary = false,
  isOutline = false,
  isDisabled = false,
  isScale = false,
}: ButtonProps) => {
  const componentTheme = useComponentTheme(
    theme,
    ButtonThemeLight,
    ButtonThemeDark
  );

  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      size={size}
      componentTheme={componentTheme}
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
