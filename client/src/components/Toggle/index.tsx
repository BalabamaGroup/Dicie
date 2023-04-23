import { useState } from 'react';

import { ComponentColor } from '@/common/types/theme';
import useThemeStore from '@/stores/ThemeStore';
import toggleTheme from '@/styles/themes/componentThemes/toggleTheme';

import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'medium' | 'small';
  color: ComponentColor;
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  color,
}: ToggleProps) => {
  const [active, setActive] = useState<boolean>(false);
  const onMouseDown = () => setActive(true);
  const onMouseUp = () => setActive(false);

  const theme = useThemeStore((state) => state.theme);
  const componentTheme = toggleTheme[theme][color];

  return (
    <Styled.ToggleWrapper
      className={className}
      value={value}
      onClick={onChange}
      size={size}
      theme={componentTheme}
      active={active}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <Styled.Toggle
        className='toggle'
        value={value}
        size={size}
        theme={componentTheme}
      />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
