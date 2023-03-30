import { useState } from 'react';

import { ComponentColor } from '@/common/types/theme';
import { useThemeStore } from '@/stores/ThemeStore';
import switchTheme from '@/styles/themes/componentThemes/switchTheme';

import * as Styled from './index.styled';

interface SwitchProps {
  className?: string;
  color: ComponentColor;
  options: Array<{
    id: number | string;
    label: string;
    onClick?: Function;
    defaultChoice?: boolean;
  }>;
}

const Switch = ({ className, color, options }: SwitchProps) => {
  const [currentOption, setCurrentOption] = useState(
    options.find((opt) => opt.defaultChoice) || options[0]
  );

  const theme = useThemeStore((state) => state.theme);
  const componentTheme = switchTheme[theme][color];

  return (
    <Styled.Switch className={className || ''}>
      {options.map((opt) => (
        <Styled.SwitchOption
          theme={componentTheme}
          key={opt.id}
          isChosen={currentOption.id === opt.id}
          onClick={() => {
            setCurrentOption(opt);
            opt.onClick && opt.onClick();
          }}
        >
          {opt.label}
          <div className='higlighting'></div>
        </Styled.SwitchOption>
      ))}
    </Styled.Switch>
  );
};

export default Switch;
