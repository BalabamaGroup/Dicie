import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import GuessBoo from '@/games/GuessBoo';
import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';
import RoomSettings from './RoomSettings';

const Room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const roomData = useGameStore((s) => s.data);
  const socketStatus = useGameStore((s) => s.socketStatus);
  useGameStore((s) => s.subscribe)();

  useEffect(() => {
    if (socketStatus && roomId)
      RoomAPI.connectToRoom(roomId).catch(() => navigate('/'));
  }, [socketStatus]);

  if (!roomData || (roomData && roomData.start === undefined))
    return <Loader.Circle />;

  if (!roomData.start)
    return (
      <Styled.RoomPage>
        <Styled.RoomContent>
          {/* <RoomUsers roomData={roomData} /> */}
          <RoomSettings />
        </Styled.RoomContent>
      </Styled.RoomPage>
    );

  return (
    <Styled.GamePage>
      <Styled.GameContent>
        <GuessBoo />;
      </Styled.GameContent>
    </Styled.GamePage>
  );
};

export default Room;
