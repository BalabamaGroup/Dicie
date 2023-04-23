import React, { MouseEventHandler } from 'react';
import useThemeStore from 'stores/ThemeStore';

import { ComponentColor } from '@/common/types/theme';
import useGameStore from '@/stores/GameStore';
import buttonTheme from '@/styles/themes/componentThemes/buttonTheme';

import * as Styled from './index.styled';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;

  size?: 'small' | 'medium' | 'large';
  color?: 'auto' | 'indigo' | 'lime';
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
  const globalTheme = useThemeStore((state) => state.theme);
  const gameStateColor = useGameStore((s) => s.getColor());
  const componentColor = !color || color === 'auto' ? gameStateColor : color;
  const componentTheme = buttonTheme[globalTheme][componentColor];

  const childrenCount = React.Children.count(children);

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
      singleChild={childrenCount === 1}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
