import { useRoomsQuery } from '@/GlobalQueries';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';

import games from '@/common/constants/games';

import Button from '@/components/Button';
import Scroll from '@/components/Scroll';
import Toast from '@/components/Toast';

import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';

interface RoomsTableProps {
  selectedGames: number[];
  searchValue: string;
  setConnectRoomID: Function;
  setEnterPasswordIsVisible: Function;
}

const RoomsTable = ({
  selectedGames,
  searchValue,
  setConnectRoomID,
  setEnterPasswordIsVisible,
}: RoomsTableProps) => {
  const navigate = useNavigate();
  const fetchUser = useUserStore((s) => s.fetchUser);

  const {
    data: rooms,
    isLoading: roomsIsLoading,
    refetch: refetchRooms,
  } = useRoomsQuery();

  const onJoinRoom = (id: string, isPrivate: boolean) => {
    const func = async (id: string, isPrivate: boolean) => {
      if (isPrivate) {
        setConnectRoomID(id);
        setEnterPasswordIsVisible(true);
      } else {
        try {
          await RoomAPI.connectToRoom(id, '');
          await fetchUser();
          navigate(`/room/${id}`);
        } catch (e) {
          Toast.error('Room is unavialable');
        }
      }
    };

    return () => func(id, isPrivate);
  };

  useEffect(() => {
    refetchRooms();
  }, []);

  if (!rooms || roomsIsLoading)
    return <Styled.RoomsTable>Loading..</Styled.RoomsTable>;

  let filteredRooms = rooms.filter(
    (room) =>
      !room.start &&
      room.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (!selectedGames.length || selectedGames.includes(room.gameId))
  );

  console.log(filteredRooms);

  return (
    <Styled.RoomsTable isNoRooms={!filteredRooms.length}>
      <ReactSVG className='no-room-image' src='/images/svgs/no-rooms.svg' />
      <Scroll className='scroll' color='indigo'>
        {filteredRooms.map((room, i) => (
          <Styled.RoomRow key={i}>
            <ReactSVG className='game-icon' src={games[room.gameId - 1].icon} />
            <div className='room-name' title={room.name}>
              {room.name}
            </div>
            <div className='players-num'>
              <ReactSVG
                className='players-num-icon'
                src={'/images/svgs/person.svg'}
              />
              {room.numberOfUsers || 0}/{games[1].maxPlayers}
            </div>
            <Button
              color='indigo'
              size='small'
              onClick={onJoinRoom(room.id, room.isPrivate)}
              isPrimary
            >
              Join
            </Button>
          </Styled.RoomRow>
        ))}
      </Scroll>
    </Styled.RoomsTable>
  );
};

export default RoomsTable;
