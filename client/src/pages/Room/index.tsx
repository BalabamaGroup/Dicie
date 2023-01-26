import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import Game from '@/components/Game';
import useRoomConnectionSocket from '@/hooks/useRoomConnectionSocket';

import * as Styled from './index.styled';
import RoomSettings from './RoomSettings';
import RoomUsers from './RoomUsers';

const Room = () => {
  const { roomId } = useParams();
  const { data: roomData, status: socketStatus } = useRoomConnectionSocket();
  const navigate = useNavigate();

  // const onDisconnect = async () => {
  //   roomId && (await RoomAPI.disconnectFromRoom(roomId));
  //   navigate('/');
  // };

  // const onFinishGame = async () => roomId && (await RoomAPI.finishGame(roomId));

  useEffect(() => {
    const conectToRoom = async () =>
      roomId && RoomAPI.connectToRoom(roomId).catch(() => navigate('/'));

    if (socketStatus) conectToRoom();
  }, [socketStatus]);

  return (
    <Styled.RoomPage>
      {roomData && !roomData.start ? (
        <Styled.RoomLoadedContent>
          <RoomUsers roomData={roomData} />
          <RoomSettings />
        </Styled.RoomLoadedContent>
      ) : (
        <div>
          {/* <button onClick={onFinishGame}>Finish game</button>
          <button onClick={onDisconnect}>Disconnect</button> */}
        </div>
      )}
      {roomData && roomData.start && <Game.Charades gameData={roomData} />}
    </Styled.RoomPage>
  );
};

export default Room;
