import RoomAPI from "../../../api/room";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { homeContentCards } from "../../../common/constants";
import * as Styled from "./index.styled";
import UserAPI from "../../../api/user";

interface JoinRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const JoinRoomCard = ({ selectedCard, onSelect }: JoinRoomCardProps) => {
  const navigate = useNavigate();

  const {
    data: currentRoomId,
    error: currentRoomIdError,
    isLoading: currentRoomIdIsLoading,
    refetch: currentRoomIdRefetch,
  } = useQuery("currentRoom", async () => {
    const currUser = await UserAPI.getCurrentUser();
    return currUser.roomId;
  });

  const { data: rooms, isLoading: roomsIsLoading } = useQuery("rooms", () => {
    return RoomAPI.getRooms();
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

  const onGoToRoom = (id: string) => {
    navigate(`/room/${id}`);
  };

  return (
    <Styled.JoinRoomCard
      cardKey={homeContentCards.JOIN_ROOM}
      selectedCard={selectedCard}
      onClick={onSelect}
    >
      {selectedCard === homeContentCards.DEFAULT ? (
        <div>
          <div className="header main">{`Join an \n existing one`}</div>
          <div className="header sub">
            And bring terror to all the living inside
          </div>
        </div>
      ) : (
        <div>
          <div>
            {currentRoomId && (
              <h4>
                <button onClick={onReturnToCurrRoom}>
                  Return to your room
                </button>
                <button onClick={onDisconnectFromCurrRoom}>
                  Disconnect from your room
                </button>
              </h4>
            )}
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
        </div>
      )}
    </Styled.JoinRoomCard>
  );
};

export default JoinRoomCard;
