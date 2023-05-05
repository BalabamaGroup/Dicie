import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import GuessBoo from '@/games/GuessBoo';
import useGameStore from '@/stores/GameStore';
import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';
import RoomSettings from './RoomSettings';

const Room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const fetchUser = useUserStore((s) => s.fetchUser);
  const roomData = useGameStore((s) => s.data);
  const socketStatus = useGameStore((s) => s.socketStatus);
  useGameStore((s) => s.subscribe)();

  useEffect(() => {
    if (socketStatus && roomId)
      RoomAPI.connectToRoom(roomId)
        .then(() => fetchUser())
        .catch(() => navigate('/home/:card'));
  }, [socketStatus]);

  if (!roomData || (roomData && roomData.start === undefined))
    return <Loader.Circle />;

  if (!roomData.start)
    return (
      <Styled.RoomPage>
        <NavBar />
        <RoomSettings />
      </Styled.RoomPage>
    );

  return (
    <Styled.GamePage>
      <NavBar />
      <Styled.GameContent>
        <GuessBoo />;
      </Styled.GameContent>
    </Styled.GamePage>
  );
};

export default Room;
