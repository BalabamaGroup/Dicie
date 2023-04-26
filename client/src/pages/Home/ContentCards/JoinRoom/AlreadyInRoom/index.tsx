import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import RoomAPI from '@/api/room';
import { mobileAndSmaller } from '@/common/utils/device';
import Button from '@/components/Button';
import { useRoomsQuery } from '@/GlobalQueries';
import useUserStore from '@/stores/UserStore';

export const StyledAlreadyInRoom = styled.div<{}>`
  z-index: 10;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 32px;

  background: ${({ theme }) =>
    theme.homePage.joinRoomCard.alreadyInRoomBackdropRGBA};
  backdrop-filter: blur(12px);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media ${mobileAndSmaller} {
    padding: 0;
  }

  .modal {
    max-width: 540px;
    padding: 20px;
    background: ${({ theme }) =>
      theme.homePage.joinRoomCard.alreadyInRoomBackground};
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;

    .header {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
    }
    .body {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
      span {
        font-weight: 700;
        color: #8986f5;
      }
    }
    .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
    }

    @media ${mobileAndSmaller} {
      width: 100%;
      height: 100%;
      padding: 32px 16px 16px 16px;
      .footer {
        margin-top: auto;
        gap: 8px;
      }
    }
  }
`;

interface AlreadyInRoomProps {}

const AlreadyInRoom = ({}: AlreadyInRoomProps) => {
  const navigate = useNavigate();

  const { data: rooms } = useRoomsQuery();
  const [user, isLoading, fetchUser] = useUserStore((s) => [
    s.user,
    s.isLoading,
    s.fetchUser,
  ]);

  const onReturnToCurrRoom = () => {
    if (user?.roomId) navigate(`/room/${user?.roomId}`);
  };

  const onDisconnectFromCurrRoom = async () => {
    if (user?.roomId) {
      await RoomAPI.disconnectFromRoom(user?.roomId);
      fetchUser();
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!rooms || !user?.roomId) return null;

  const [myRoom] = rooms.filter((r) => r.id === user?.roomId);

  if (!myRoom) return null;

  return (
    <StyledAlreadyInRoom>
      <div className='modal'>
        <div className='header'>You are already in the room</div>
        <div className='body'>
          You are already connected to Room <span>«{myRoom.name}»</span>
          <br />
          <br />
          To join another room, you must first disconnect from your current one.
        </div>
        <div className='footer'>
          <Button
            size='medium'
            isScale
            color='indigo'
            isPrimary
            onClick={onReturnToCurrRoom}
          >
            Return
          </Button>
          <Button
            isPrimary
            type='danger'
            size='medium'
            isScale
            color='indigo'
            onClick={onDisconnectFromCurrRoom}
          >
            {isLoading ? 'Loading...' : 'Leave'}
          </Button>
        </div>
      </div>
    </StyledAlreadyInRoom>
  );
};

export default AlreadyInRoom;
