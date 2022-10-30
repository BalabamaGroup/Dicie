import React, { MouseEventHandler } from "react";
import * as Styled from "./index.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  scale?: boolean;
  disabled?: boolean;
}

const Button = ({ onClick, disabled, children, scale }: ButtonProps) => {
  return (
    <Styled.Button scale={scale} disabled={disabled} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
