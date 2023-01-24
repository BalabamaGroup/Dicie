import { Game } from '@/common/types/room';

import MainStage from './Stage/MainStage';
import PlayerPickingStage from './Stage/PlayerPicking';

interface CharadesProps {
  gameData: Game;
}

const Charades = ({ gameData }: CharadesProps) => {
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

export default Charades;
