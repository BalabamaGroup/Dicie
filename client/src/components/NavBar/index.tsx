import { useLocation, useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import routes from '@/common/constants/routes';
import useAuth from '@/hooks/useAuth';
import { useColorStore } from '@/stores/ColorStore';
import { useGameStore } from '@/stores/GameStore';
import { useThemeStore } from '@/stores/ThemeStore';

import * as Styled from './index.styled';

interface NavBarProps {
  page?: 'home' | 'room' | 'guessBoo';
}

const NavBar = ({ page }: NavBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomId } = useParams();

  const setAutoTheme: any = useThemeStore((s) => s.setAutoTheme);
  const toggleTheme: any = useThemeStore((s) => s.toggleTheme);
  const onDisconnect = async () => {
    roomId && (await RoomAPI.disconnectFromRoom(roomId));
    navigate('/');
  };
  const { signOut } = useAuth();

  const color = useColorStore((state) => state.color[page || 'home']);

  return (
    <Styled.NavBar isWait={color === 'indigo'}>
      <Styled.Logo>Dicie</Styled.Logo>

      <Styled.LinksWrapper>
        {/* <Styled.Link onClick={() => navigate('/voicechat')}>
          WebRTC test
        </Styled.Link> */}
        <Styled.Link onClick={() => navigate(routes.HOME)}>Home</Styled.Link>
        <Styled.Link onClick={setAutoTheme}>Auto theme</Styled.Link>
        <Styled.Link onClick={toggleTheme}>Toggle theme</Styled.Link>
        <Styled.Link onClick={signOut}>Sign out</Styled.Link>
        {roomId && <Styled.Link onClick={onDisconnect}>Leave room</Styled.Link>}
      </Styled.LinksWrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
