import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import GuessBoo from '@/games/GuessBoo';
import useRoomConnectionSocket from '@/hooks/useRoomConnectionSocket';

import * as Styled from './index.styled';
import RoomSettings from './RoomSettings';
import RoomUsers from './RoomUsers';

const Room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const { data: roomData, status: socketStatus } = useRoomConnectionSocket();

  useEffect(() => {
    if (socketStatus && roomId)
      RoomAPI.connectToRoom(roomId).catch(() => navigate('/'));
  }, [socketStatus, roomId]);

  if (!roomData || (roomData && roomData.start === undefined))
    return (
      <Styled.RoomPage>
        <Loader.Circle />
      </Styled.RoomPage>
    );

  if (!roomData.start)
    return (
      <Styled.RoomPage>
        <NavBar page='room' />
        <Styled.RoomContent>
          <RoomUsers roomData={roomData} />
          <RoomSettings />
        </Styled.RoomContent>
      </Styled.RoomPage>
    );

  return (
    <Styled.GamePage>
      <NavBar page='guessBoo' />
      <Styled.GameContent>
        <GuessBoo gameData={roomData} />;
      </Styled.GameContent>
    </Styled.GamePage>
  );
};

export default Room;
