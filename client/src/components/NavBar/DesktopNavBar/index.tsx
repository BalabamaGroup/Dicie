import { useNavigate } from 'react-router-dom';

import routes from '@/common/constants/routes';
import useThemeStore from '@/stores/ThemeStore';
import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import MyRoomNavigation from '../SubOptions/MyRoomNavigation';
import SettingsTheme from '../SubOptions/SettingsTheme';
import { useNavbarColor } from '../useNavbarColor';
import * as Styled from './index.styled';

interface DesktopNavBarProps {
  withHome: boolean;
  withMyRoom: boolean;
}

const DesktopNavBar = ({ withHome, withMyRoom }: DesktopNavBarProps) => {
  const navigate = useNavigate();
  const goHome = () => navigate(routes.HOME);

  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  return (
    <Styled.DesktopNavBar className='navbar-desktop'>
      <Styled.Logo theme={componentTheme} onClick={goHome}>
        Dicie
      </Styled.Logo>

      <Styled.DesktopNavBarContent theme={componentTheme}>
        <Styled.DesktopNavBarOption theme={componentTheme}>
          Profile
        </Styled.DesktopNavBarOption>

        {withMyRoom && (
          <Styled.DesktopNavBarOption theme={componentTheme}>
            <div className='option-title'>My Room</div>
            <div className='option-content'>
              <div className='option-content-title'>My Room</div>
              <MyRoomNavigation />
            </div>
          </Styled.DesktopNavBarOption>
        )}

        <Styled.DesktopNavBarOption theme={componentTheme}>
          <div className='option-title'>Settings</div>
          <div className='option-content'>
            <div className='option-content-title'>Settings</div>
            <SettingsTheme />
          </div>
        </Styled.DesktopNavBarOption>
      </Styled.DesktopNavBarContent>
    </Styled.DesktopNavBar>
  );
};

export default DesktopNavBar;
