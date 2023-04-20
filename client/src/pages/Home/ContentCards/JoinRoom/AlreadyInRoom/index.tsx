import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import useUserStore from '@/stores/UserStore';

export const StyledAlreadyInRoom = styled.div<{}>`
  z-index: 10;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 32px;

  background: rgba(137, 134, 245, 0.4);
  backdrop-filter: blur(12px);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .modal {
    padding: 20px;
    background: #f5f6ff;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .header {
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 16px;
    }
    .body {
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
    }
    .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 32px;
    }
  }
`;

interface AlreadyInRoomProps {}

const AlreadyInRoom = ({}: AlreadyInRoomProps) => {
  const navigate = useNavigate();

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

  return (
    <StyledAlreadyInRoom>
      <div className='modal'>
        <div className='header'>You are already in the room</div>
        <div className='body'>
          You are already connected to Room «Kukukaka» <br />
          and cannot connect to two rooms at the same time. <br />
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
            Return to room
          </Button>
          <Button
            size='medium'
            isScale
            color='indigo'
            onClick={onDisconnectFromCurrRoom}
          >
            {isLoading ? 'Loading...' : 'Leave Room'}
          </Button>
        </div>
      </div>
    </StyledAlreadyInRoom>
  );
};

export default AlreadyInRoom;
