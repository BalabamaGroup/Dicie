import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import GuessBoo from '@/games/GuessBoo';
import Game from '@/games/index';
import RoomAPI from '@/shared/api/room';
import useRoomConnectionSocket from '@/shared/hooks/useRoomConnectionSocket';

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
      {roomData && roomData.start && <GuessBoo gameData={roomData} />}
    </Styled.RoomPage>
  );
};

export default Room;
