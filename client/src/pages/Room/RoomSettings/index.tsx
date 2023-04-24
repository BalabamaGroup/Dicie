import { useParams } from 'react-router-dom';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import Player from '@/components/Player';
import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';

const RoomSettings = () => {
  const { roomId } = useParams();
  const users = useGameStore((s) => s.users);
  const onStartGame = async () => roomId && (await RoomAPI.startGame(roomId));

  return (
    <Styled.RoomSettings>
      <div className='players'>
        {users.map((user) => (
          <Player
            onClick={() => {}}
            size='large'
            color='indigo'
            form='tile'
            tileContent={{
              label: user.username,
            }}
          />
        ))}
      </div>

      <Button
        color='indigo'
        isPrimary
        className={'start-game-button'}
        onClick={onStartGame}
        isScale
        size='large'
      >
        Start game
      </Button>
    </Styled.RoomSettings>
  );
};

export default RoomSettings;
