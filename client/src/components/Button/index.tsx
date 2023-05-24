import Loader from '../Loader';
import * as Styled from './index.styled';
import useGameStore from '@/stores/GameStore';
import buttonTheme from '@/styles/themes/componentThemes/buttonTheme';
import React, { MouseEventHandler } from 'react';
import useThemeStore from 'stores/ThemeStore';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;

  size?: 'small' | 'medium' | 'large';
  color?: 'auto' | 'indigo' | 'lime';
  type?: 'success' | 'warning' | 'danger';
  isPrimary?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isScale?: boolean;
}

const Button = ({
  className,
  children,
  onClick,
  size = 'medium',
  color,
  type,
  isPrimary = false,
  isDisabled = false,
  isLoading = false,
  isScale = false,
}: ButtonProps) => {
  const globalTheme = useThemeStore((state) => state.theme);
  const gameStateColor = useGameStore((s) => s.getColor());
  const componentColor = !color || color === 'auto' ? gameStateColor : color;
  const componentTheme = buttonTheme[globalTheme](componentColor, type);

  const childrenCount = React.Children.count(children);

  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      size={size}
      theme={componentTheme}
      isPrimary={isPrimary}
      disabled={isDisabled}
      isScale={isScale}
      singleChild={childrenCount === 1}
    >
      {isLoading ? (
        <Loader.BouncingDots
          size={size === 'large' ? 20 : size === 'medium' ? 16 : 12}
        />
      ) : (
        children
      )}
    </Styled.Button>
  );
};

export default Button;
