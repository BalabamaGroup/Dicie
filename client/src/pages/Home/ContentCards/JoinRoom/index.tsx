import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import RoomAPI from '@/api/room';
import { homeContentCards } from '@/common/constants';

import { useUserStore } from '../../../../stores/UserStore';
import * as Styled from './index.styled';

interface JoinRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const JoinRoomCard = ({ selectedCard, onSelect }: JoinRoomCardProps) => {
  const navigate = useNavigate();

  const [user, fetchUser] = useUserStore((s) => [s.user, s.fetchUser]);
  const { data: rooms, isLoading: roomsIsLoading } = useQuery('rooms', () => {
    return RoomAPI.getRooms();
  });

  const onReturnToCurrRoom = () => {
    if (user?.roomId) navigate(`/room/${user?.roomId}`);
  };

  const onDisconnectFromCurrRoom = async () => {
    if (user?.roomId) {
      await RoomAPI.disconnectFromRoom(user?.roomId);
      fetchUser();
    }
  };

  const onGoToRoom = async (id: string) => {
    try {
      await RoomAPI.connectToRoom(id);
      await fetchUser();
      navigate(`/room/${id}`);
    } catch (e) {
      console.log('Room is unavialable');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
            {user?.roomId && (
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
                    disabled={!!user?.roomId}
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
