import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';
import { gameData } from '@/common/constants';
import Button from '@/components/Button';
import Scroll from '@/components/Scroll';
import Toast from '@/components/Toast';
import { useRoomsQuery } from '@/GlobalQueries';
import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';

interface RoomsTableProps {
  selectedGames: number[];
  searchValue: string;
}

const RoomsTable = ({ selectedGames, searchValue }: RoomsTableProps) => {
  const navigate = useNavigate();
  const fetchUser = useUserStore((s) => s.fetchUser);

  const {
    data: rooms,
    isLoading: roomsIsLoading,
    refetch: refetchRooms,
  } = useRoomsQuery();

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

  useEffect(() => {
    refetchRooms();
  }, []);

  if (!rooms || roomsIsLoading)
    return <Styled.RoomsTable>Loading..</Styled.RoomsTable>;

  let filteredRooms = rooms.filter(
    (r) =>
      !r.start &&
      r.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (!selectedGames.length || selectedGames.includes(1))
  );

  return (
    <Styled.RoomsTable isNoRooms={!filteredRooms.length}>
      <ReactSVG className='no-room-image' src='/images/svgs/no-rooms.svg' />
      <Scroll className='scroll' color='indigo'>
        {[
          ...filteredRooms,
          ...filteredRooms,
          ...filteredRooms,
          ...filteredRooms,
          ...filteredRooms,
          ...filteredRooms,
          ...filteredRooms,
        ].map((room, i) => (
          <Styled.RoomRow key={i}>
            <ReactSVG className='game-icon' src={gameData[1].icon} />
            <div className='room-name' title={room.name}>
              {room.name}
            </div>
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
      </Scroll>
    </Styled.RoomsTable>
  );
};

export default RoomsTable;
