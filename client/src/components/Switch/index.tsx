import { useState } from "react";
import * as Styled from "./index.styled";

interface SwitchProps {
  className?: string;
  options: Array<{
    id: number | string;
    label: string;
    onClick?: Function;
    defaultChoice?: boolean;
  }>;
}

const Switch = ({ className, options }: SwitchProps) => {
  const [currentOption, setCurrentOption] = useState(
    options.find((opt) => opt.defaultChoice) || options[0]
  );

  console.log(currentOption);

  return (
    <Styled.Switch className={className || ""}>
      {options.map((opt) => (
        <Styled.SwitchOption
          key={opt.id}
          isChosen={currentOption.id === opt.id}
          onClick={() => {
            setCurrentOption(opt);
            opt.onClick && opt.onClick();
          }}
        >
          {opt.label}
          <div className="higlighting"></div>
        </Styled.SwitchOption>
      ))}
    </Styled.Switch>
  );
};

export default Switch;
