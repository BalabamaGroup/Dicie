import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import RoomAPI from "../../api/room";
import UserAPI from "../../api/user";

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState("");
  const onChangeRoomName = (e: any) => setRoomName(e.target.value);

  const { data: rooms, isLoading: roomsIsLoading } = useQuery("rooms", () => {
    return RoomAPI.getRooms();
  });

  const {
    data: currentRoomId,
    error: currentRoomIdError,
    isLoading: currentRoomIdIsLoading,
    refetch: currentRoomIdRefetch,
  } = useQuery("currentRoom", async () => {
    const currUser = await UserAPI.getCurrentUser();
    return currUser.roomId;
  });

  const onReturnToCurrRoom = () => {
    if (currentRoomId) navigate(`/room/${currentRoomId}`);
  };

  const onDisconnectFromCurrRoom = async () => {
    if (currentRoomId) {
      await RoomAPI.disconnectFromRoom(currentRoomId);
      currentRoomIdRefetch();
    }
  };

  const onCreateRoom = async () => {
    const newRoom = await RoomAPI.createRoom({ gameId: 1, name: roomName });
    onGoToRoom(newRoom.id);
  };

  const onGoToRoom = (id: string) => {
    navigate(`/room/${id}`);
  };

  if (currentRoomIdError) return <p>An error has occured</p>;
  if (currentRoomIdIsLoading) return <p>is Loading...</p>;

  return (
    <div>
      <h1>Home Page</h1>

      {currentRoomId && (
        <h4>
          <button onClick={onReturnToCurrRoom}>Return to your room</button>
          <button onClick={onDisconnectFromCurrRoom}>
            Disconnect from your room
          </button>
        </h4>
      )}

      <br />
      <br />

      <button disabled={!!currentRoomId} onClick={onCreateRoom}>
        <h2>Create Room</h2>
      </button>
      <input value={roomName} onChange={onChangeRoomName} />

      <br />
      <br />

      {roomsIsLoading ? (
        <p>Room data is loading</p>
      ) : (
        rooms &&
        rooms.map((room: any) => (
          <div key={room.id}>
            <button
              disabled={!!currentRoomId}
              onClick={() => onGoToRoom(room.id)}
            >
              {room.name}
            </button>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
