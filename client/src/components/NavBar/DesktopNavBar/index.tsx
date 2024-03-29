import { useNavigate } from 'react-router-dom';

import routes from '@/common/constants/routes';

import useThemeStore from '@/stores/ThemeStore';

import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import MyRoomNavigation from '../SubOptions/MyRoomNavigation';
import Profile from '../SubOptions/Profile';
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
  const goToLeaderboard = () => navigate(routes.LEADERBOARD);

  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  return (
    <Styled.DesktopNavBar className='navbar-desktop'>
      <Styled.Logo theme={componentTheme} onClick={goHome}>
        Dicie
      </Styled.Logo>

      <Styled.DesktopNavBarContent theme={componentTheme}>
        <Styled.DesktopNavBarOption
          onClick={goToLeaderboard}
          theme={componentTheme}
        >
          <div className='option-title is-link'>Leaderboard</div>
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
          <div className='option-title'>Theme</div>
          <div className='option-content'>
            <div className='option-content-title'>Theme</div>
            <SettingsTheme />
          </div>
        </Styled.DesktopNavBarOption>

        <Styled.DesktopNavBarOption theme={componentTheme}>
          <div className='option-title'>Profile</div>
          <div className='option-content'>
            <div className='option-content-title'>Profile</div>
            <Profile />
          </div>
        </Styled.DesktopNavBarOption>
      </Styled.DesktopNavBarContent>
    </Styled.DesktopNavBar>
  );
};

export default DesktopNavBar;
