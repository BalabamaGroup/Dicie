import styled from 'styled-components';

import Button from '@/components/Button';
import RadioOption from '@/components/RadioOption';
import Toggle from '@/components/Toggle';
import useThemeStore from '@/stores/ThemeStore';
import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import { useNavbarColor } from '../useNavbarColor';

export const StyledSettingsTheme = styled.div<{}>`
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding: 8px 0;

  .settings-theme-option {
    user-select: none;
    cursor: pointer;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 14px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    height: 20px;
    color: ${({ theme }) => theme.options.settings.text};

    &-auto {
      margin-bottom: 4px;
    }
  }
`;

interface SettingsThemeProps {}

const SettingsTheme = ({}: SettingsThemeProps) => {
  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  const themeLS = useThemeStore((s) => s.themeLS);
  const setAutoTheme = useThemeStore((s) => s.setAutoTheme);
  const setLightTheme: any = useThemeStore((s) => s.setLightTheme);
  const setDarkTheme: any = useThemeStore((s) => s.setDarkTheme);

  const toggleAutoTheme = () => {
    if (themeLS === 'auto') {
      if (theme === 'dark') setDarkTheme();
      else setLightTheme();
    } else {
      setAutoTheme();
    }
  };

  return (
    <StyledSettingsTheme theme={componentTheme}>
      <div
        className='settings-theme-option settings-theme-option-auto'
        onClick={toggleAutoTheme}
      >
        <Toggle
          size='small'
          color={color}
          value={themeLS === 'auto'}
          onChange={() => {}}
        />
        Device
      </div>

      {themeLS !== 'auto' && (
        <Button
          isScale
          color={color}
          size='small'
          onClick={theme === 'dark' ? setLightTheme : setDarkTheme}
        >
          {theme === 'dark' ? 'Set Light Theme' : 'Set Dark Theme'}
        </Button>
      )}
    </StyledSettingsTheme>
  );
};

export default SettingsTheme;
