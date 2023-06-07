import { lazy, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';

import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';

import useGameStore from '@/stores/GameStore';
import useUserStore from '@/stores/UserStore';

import RoomSettings from './RoomSettings';
import * as Styled from './index.styled';

const GuessBoo = lazy(() => import('@/games/GuessBoo'));
const Memetaur = lazy(() => import('@/games/Memetaur'));

const Room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const user = useUserStore((s) => s.user);

  const fetchUser = useUserStore((s) => s.fetchUser);
  const roomData = useGameStore((s) => s.data);
  const socketStatus = useGameStore((s) => s.socketStatus);
  useGameStore((s) => s.subscribe());

  useEffect(() => {
    console.log(user?.roomId === roomId);
    if (user && user.roomId === roomId) return;
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
        {roomData.gameId === 1 ? <GuessBoo /> : <Memetaur />}
      </Styled.GameContent>
    </Styled.GamePage>
  );
};

export default Room;
