import { useNavigate, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import RoomAPI from '@/api/room';
import useUserStore from '@/stores/UserStore';

export const StyledMyRoomNavigation = styled.div<{}>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4px;
  margin-top: 10px;

  .myroom-navigation-option {
    cursor: pointer;
    padding: 0 8px;
    box-sizing: border-box;

    width: 100%;
    height: 32px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #fff;

    &:hover {
      background: #100f16;
    }

    &-disconnect {
      color: #fc3057;
    }

    .option-icon {
      margin-left: auto;
      width: 16px;
      height: 16px;
      svg {
        width: 16px;
        height: 16px;
        path {
          fill: #fff;
        }
      }

      &-return {
        transform: rotate(90deg);
      }

      &-disconnect {
        svg {
          path {
            fill: #fc3057;
          }
        }
      }
    }
  }
`;

interface MyRoomNavigationProps {}

const MyRoomNavigation = ({}: MyRoomNavigationProps) => {
  const roomId = useUserStore((s) => s.user!.roomId);
  const fetchUser = useUserStore((s) => s.fetchUser);
  const navigate = useNavigate();

  const onReturn = async () => {
    roomId && navigate(`/room/${roomId}`);
  };

  const onDisconnect = async () => {
    roomId && (await RoomAPI.disconnectFromRoom(roomId));
    await fetchUser();
    navigate('/');
  };

  return (
    <StyledMyRoomNavigation>
      <div className='myroom-navigation-option' onClick={onReturn}>
        Return
        <ReactSVG
          className='option-icon option-icon-return'
          src='/images/svgs/arrow.full.up.svg'
        />
      </div>
      {roomId && (
        <div
          className='myroom-navigation-option myroom-navigation-option-disconnect'
          onClick={onDisconnect}
        >
          Disconnect
          <ReactSVG
            className='option-icon option-icon-disconnect'
            src='/images/svgs/leave.svg'
          />
        </div>
      )}
    </StyledMyRoomNavigation>
  );
};

export default MyRoomNavigation;
