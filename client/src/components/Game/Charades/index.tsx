import { Game } from '@/common/types/room';
import MainStage from './Stage/MainStage';
import PlayerPickingStage from './Stage/PlayerPickingStage';

interface CharadesProps {
  gameData: Game;
}

const Charades = ({ gameData }: CharadesProps) => {
  const currentUserId = +(sessionStorage.getItem('id') || -1);
  const players = gameData.users.filter((user) => user.id !== currentUserId);
  const [currentUserPlayer] = gameData.users.filter(
    (user) => user.id === currentUserId
  );

  return (
    <div>
      {!gameData.roomDataDto?.allUsersReady ? (
        <PlayerPickingStage
          currentUserPlayer={currentUserPlayer}
          players={players}
        />
      ) : (
        <MainStage
          gameData={gameData}
          currentUserPlayer={currentUserPlayer}
          players={players}
        />
      )}
    </div>
  );
};

export default Charades;
