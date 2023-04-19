import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';
import { gameData } from '@/common/constants';
import Button from '@/components/Button';
import Toast from '@/components/Toast';
import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';

interface RoomsTableProps {}

const RoomsTable = ({}: RoomsTableProps) => {
  const navigate = useNavigate();

  const fetchUser = useUserStore((s) => s.fetchUser);

  const { data: rooms } = useQuery('roomListQuery', () => {
    return RoomAPI.getRooms();
  });

  const onJoinRoom = (id: string) => {
    const func = async (id: string) => {
      try {
        await RoomAPI.connectToRoom(id);
        await fetchUser();
        navigate(`/room/${id}`);
      } catch (e) {
        Toast.error('Room is unavialable');
      }
    };
    return () => func(id);
  };

  return (
    <Styled.RoomsTable>
      {rooms?.length &&
        rooms.map((room) => (
          <Styled.RoomRow key={room.id}>
            <ReactSVG className='game-icon' src={gameData[1].icon} />
            <div className='room-name'>{room.name}</div>
            <div className='players-num'>
              <ReactSVG
                className='players-num-icon'
                src={'/images/svgs/person.svg'}
              />
              {room.numberOfUsers || 0}/{gameData[1].maxPlayers}
            </div>
            <Button size='small' onClick={onJoinRoom(room.id)} isPrimary>
              Join
            </Button>
          </Styled.RoomRow>
        ))}
    </Styled.RoomsTable>
  );
};

export default RoomsTable;
