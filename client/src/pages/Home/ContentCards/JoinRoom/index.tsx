import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import RoomAPI from '@/api/room';
import UserAPI from '@/api/user';
import { homeContentCards } from '@/common/constants';
import useCurrentUser from '@/hooks/useCurrentUser';

import * as Styled from './index.styled';

interface JoinRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const JoinRoomCard = ({ selectedCard, onSelect }: JoinRoomCardProps) => {
  const navigate = useNavigate();

  const { data: currUser, refetch: currUserRefetch } = useCurrentUser();
  const { data: rooms, isLoading: roomsIsLoading } = useQuery('rooms', () => {
    return RoomAPI.getRooms();
  });

  const onReturnToCurrRoom = () => {
    if (currUser?.roomId) navigate(`/room/${currUser?.roomId}`);
  };

  const onDisconnectFromCurrRoom = async () => {
    if (currUser?.roomId) {
      await RoomAPI.disconnectFromRoom(currUser?.roomId);
      currUserRefetch();
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
          <div className='header main'>{`Join an \n existing one`}</div>
          <div className='header sub'>
            And bring terror to all the living inside
          </div>
        </div>
      ) : (
        <div>
          <div>
            {currUser?.roomId && (
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
                    disabled={!!currUser?.roomId}
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
