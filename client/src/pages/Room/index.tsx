import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomAPI from "../../api/room";
import User, { UserInGame } from "../../common/types/user";
import Game from "../../components/Game";
import useRoomConnectionSocket from "../../hooks/useRoomConnectionSocket";

const Room = () => {
  const { roomId } = useParams();
  const { roomData } = useRoomConnectionSocket();
  const navigate = useNavigate();

  const onStartGame = async () => roomId && (await RoomAPI.startGame(roomId));
  const onFinishGame = async () => roomId && (await RoomAPI.finishGame(roomId));
  const onDisconnect = async () => {
    roomId && (await RoomAPI.disconnectFromRoom(roomId));
    navigate("/");
  };

  useEffect(() => {
    const conectToRoom = async () => {
      roomId && RoomAPI.connectToRoom(roomId).catch(() => navigate("/"));
    };
    conectToRoom();
  }, [roomId]);

  return (
    <div>
      {roomData && !roomData.start ? (
        <div>
          {roomData?.users &&
            roomData.users.map((user: UserInGame) => (
              <p key={user.id}>{user.username}</p>
            ))}
          <button onClick={onDisconnect}>Disconnect</button>
          <button onClick={onStartGame}>Start game</button>
        </div>
      ) : (
        <div>
          <button onClick={onFinishGame}>Finish game</button>
        </div>
      )}
      {roomData && roomData.start && <Game.Charades gameData={roomData} />}
    </div>
  );
};

export default Room;
