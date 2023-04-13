import { useNavigate } from 'react-router-dom';

import routes from '@/common/constants/routes';

import MyRoomNavigation from '../SubOptions/MyRoomNavigation';
import SettingsTheme from '../SubOptions/SettingsTheme';
import * as Styled from './index.styled';

interface DesktopNavBarProps {
  withHome: boolean;
  withMyRoom: boolean;
}

const DesktopNavBar = ({ withHome, withMyRoom }: DesktopNavBarProps) => {
  const navigate = useNavigate();
  const goHome = () => navigate(routes.HOME);

  return (
    <Styled.DesktopNavBar className='navbar-desktop'>
      <Styled.Logo onClick={goHome}>Dicie</Styled.Logo>

      <Styled.DesktopNavBarContent>
        <Styled.DesktopNavBarOption>Profile</Styled.DesktopNavBarOption>

        {withMyRoom && (
          <Styled.DesktopNavBarOption>
            <div className='option-title'>My Room</div>
            <div className='option-content'>
              <div className='option-content-title'>My Room</div>
              <MyRoomNavigation />
            </div>
          </Styled.DesktopNavBarOption>
        )}

        <Styled.DesktopNavBarOption>
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
