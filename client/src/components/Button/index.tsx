import React, { MouseEventHandler } from 'react';

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
  isPrimary = false,
  isOutline = false,
  isDisabled = false,
  isScale = false,
}: ButtonProps) => {
  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      size={size}
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
