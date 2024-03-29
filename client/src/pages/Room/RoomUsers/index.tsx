import { useNavigate, useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import { Game } from '@/common/types/room';
import { UserInGame } from '@/common/types/user';
import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';

interface RoomUsersProps {
  roomData: Game;
}

const RoomUsers = ({ roomData }: RoomUsersProps) => {
  const { users } = roomData;
  if (!users) return null;

  const { roomId } = useParams();
  const navigate = useNavigate();

  const currUser = useUserStore((s) => s.user);

  const onDisconnect = async () => {
    roomId && (await RoomAPI.disconnectFromRoom(roomId));
    navigate('/');
  };

  return (
    <Styled.RoomUsers>
      {users.map((user: UserInGame) => (
        <Styled.User key={user.id}>
          <div className='avatar'></div>
          <div className='username'>{user.username}</div>

          {currUser?.id === user.id && (
            <button onClick={onDisconnect}>Disconnect</button>
          )}
        </Styled.User>
      ))}
    </Styled.RoomUsers>
  );
};

export default RoomUsers;
