import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';
import useAuth from '@/hooks/useAuth';
import useColorStore from '@/stores/ColorStore';
import useUserStore from '@/stores/UserStore';

import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

// prettier-ignore
export const NavbarDeviceWidthWrapper = styled.div<{}>`
  .navbar-desktop { display: flex; }
  .navbar-mobile { display: none; }
  @media ${tabletAndSmaller} {
    .navbar-desktop { display: none; }
    .navbar-mobile { display: flex;}
  }
`;

interface NavBarProps {
  page?: 'home' | 'room' | 'guessBoo';
}

const NavBar = ({ page }: NavBarProps) => {
  const location = useLocation();

  const withHome = location.pathname !== '/';
  const withMyRoom = !!useUserStore((s) => s.user!.roomId);

  const { signOut } = useAuth();
  const color = useColorStore((state) => state.color[page || 'home']);

  return (
    <NavbarDeviceWidthWrapper>
      <DesktopNavBar withHome={withHome} withMyRoom={withMyRoom} />
      <MobileNavBar withHome={withHome} withMyRoom={withMyRoom} />
    </NavbarDeviceWidthWrapper>
  );
};

export default NavBar;
