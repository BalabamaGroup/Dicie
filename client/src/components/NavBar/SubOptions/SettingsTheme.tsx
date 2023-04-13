import styled from 'styled-components';

import RadioOption from '@/components/RadioOption';
import Toggle from '@/components/Toggle';
import useThemeStore from '@/stores/ThemeStore';

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
    gap: 8px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #eceefe;

    &-auto {
      margin-bottom: 4px;
    }
  }
`;

interface SettingsThemeProps {}

const SettingsTheme = ({}: SettingsThemeProps) => {
  const theme = useThemeStore((s) => s.theme);
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
    <StyledSettingsTheme>
      <div
        className='settings-theme-option settings-theme-option-auto'
        onClick={toggleAutoTheme}
      >
        <Toggle
          size='small'
          color='indigo'
          value={themeLS === 'auto'}
          onChange={() => {}}
        />
        System default
      </div>
      {themeLS !== 'auto' && [
        <div
          key='theme-light'
          className='settings-theme-option'
          onClick={setLightTheme}
        >
          <RadioOption isSelected={theme === 'light'} />
          Light
        </div>,
        <div
          key='theme-dark'
          className='settings-theme-option'
          onClick={setDarkTheme}
        >
          <RadioOption isSelected={theme === 'dark'} />
          Dark
        </div>,
      ]}
    </StyledSettingsTheme>
  );
};

export default SettingsTheme;
