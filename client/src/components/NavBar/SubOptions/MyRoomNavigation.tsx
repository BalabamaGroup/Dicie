import { useNavigate, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import { useNavbarColor } from '../useNavbarColor';

export const StyledMyRoomNavigation = styled.div<{}>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4px;
  margin-top: 10px;

  .option-icon-return {
    transform: rotate(90deg);
  }
`;

interface MyRoomNavigationProps {}

const MyRoomNavigation = ({}: MyRoomNavigationProps) => {
  const roomId = useUserStore((s) => s.user!.roomId);
  const fetchUser = useUserStore((s) => s.fetchUser);
  const navigate = useNavigate();

  const onReturn = async () => {
    if (!roomId) return;
    navigate(`/room/${roomId}`);
  };

  const onDisconnect = async () => {
    if (!roomId) return;
    await RoomAPI.disconnectFromRoom(roomId);
    await fetchUser();
    navigate('/home/joinRoom');
  };

  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  return (
    <StyledMyRoomNavigation theme={componentTheme}>
      <Button size='small' color={color} onClick={onReturn} isScale>
        Return
        <ReactSVG
          className='option-icon option-icon-return'
          src='/images/svgs/arrow.full.up.svg'
        />
      </Button>
      {roomId && (
        <Button
          type='danger'
          size='small'
          color={color}
          onClick={onDisconnect}
          isScale
        >
          Disconnect
          <ReactSVG
            className='option-icon option-icon-disconnect'
            src='/images/svgs/leave.svg'
          />
        </Button>
      )}
    </StyledMyRoomNavigation>
  );
};

export default MyRoomNavigation;
