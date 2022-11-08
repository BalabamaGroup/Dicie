import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RoomAPI from "../../../api/room";
import { homeContentCards } from "../../../common/constants";
import * as Styled from "./index.styled";

interface CreateRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const CreateRoomCard = ({ selectedCard, onSelect }: CreateRoomCardProps) => {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState("");
  const onChangeRoomName = (e: any) => setRoomName(e.target.value);
  const onCreateRoom = async () => {
    const newRoom = await RoomAPI.createRoom({ gameId: 1, name: roomName });
    navigate(`/room/${newRoom.id}`);
  };

  return (
    <Styled.CreateRoomCard
      cardKey={homeContentCards.CREATE_ROOM}
      selectedCard={selectedCard}
      onClick={onSelect}
    >
      {selectedCard === homeContentCards.DEFAULT ? (
        <div>
          <div className="header main">{`Create your \n own room`}</div>
          <div className="header sub">And make others obey your will</div>
        </div>
      ) : (
        <div>
          <button onClick={onCreateRoom}>
            <h2>Create Room</h2>
          </button>
          <input value={roomName} onChange={onChangeRoomName} />
        </div>
      )}
    </Styled.CreateRoomCard>
  );
};

export default CreateRoomCard;
