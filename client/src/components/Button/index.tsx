import React, { MouseEventHandler } from 'react';
import { useThemeStore } from 'stores/ThemeStore';

import { ComponentColor } from '@/common/types/theme';
import buttonTheme from '@/styles/themes/componentThemes/buttonTheme';

import * as Styled from './index.styled';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  size?: 'large' | 'medium' | 'small';
  color: ComponentColor;
  isPrimary?: boolean;
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
  isDisabled = false,
  isScale = false,
}: ButtonProps) => {
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = buttonTheme[theme][color];

  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      size={size}
      theme={componentTheme}
      color={color}
      isPrimary={isPrimary}
      disabled={isDisabled}
      isScale={isScale}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
