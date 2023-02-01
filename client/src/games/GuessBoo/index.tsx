import { Game } from '@/shared/types/room';

import MainStage from './Stage/MainStage';
import PlayerPickingStage from './Stage/PlayerPicking';

interface GuessBooProps {
  gameData: Game;
}

const GuessBoo = ({ gameData }: GuessBooProps) => {
  const currentUserId = +(sessionStorage.getItem('id') || -1);
  const players = gameData.users.filter((user) => user.id !== currentUserId);
  const [currentUserPlayer] = gameData.users.filter(
    (user) => user.id === currentUserId
  );

  if (!gameData.roomDataDto?.allUsersReady)
    return (
      <PlayerPickingStage
        currentUserPlayer={currentUserPlayer}
        players={players}
      />
    );

  return (
    <MainStage
      gameData={gameData}
      currentUserPlayer={currentUserPlayer}
      players={players}
    />
  );
};

export default GuessBoo;
