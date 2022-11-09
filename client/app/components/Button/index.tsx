import React, { MouseEventHandler } from "react";
import * as Styled from "./index.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;

  isScale?: boolean;
  disabled?: boolean;
}

const Button = ({ onClick, disabled, children, isScale }: ButtonProps) => {
  return (
    <Styled.Button isScale={isScale} disabled={disabled} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
