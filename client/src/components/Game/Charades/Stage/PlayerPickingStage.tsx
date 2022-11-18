import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';

import Player from '../Player';
import CurrentUserPlayer from '../Player/CurrentUserPlayer';

interface PlayerPickingStageProps {
  currentUserPlayer: UserInGame;
  players: UserInGame[];
}

const PlayerPickingStage = ({
  currentUserPlayer,
  players,
}: PlayerPickingStageProps) => {
  const isCurrentUserTurn =
    currentUserPlayer.state.isGoing && !currentUserPlayer.state.selectedUser;

  const onReadyClick = () => {
    CharadesAPI.setReady();
  };

  return (
    <div>
      {isCurrentUserTurn && <h1>Select a player to write him a charade</h1>}

      <CurrentUserPlayer player={currentUserPlayer} />
      {players.map((player) => (
        <Player
          stage='playerPicking'
          key={player.id}
          player={player}
          currentUserPlayer={currentUserPlayer}
        />
      ))}

      <button
        onClick={onReadyClick}
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
      >
        <h3>
          {!currentUserPlayer.state.ready ? 'I am ready!' : 'Im not ready ('}
        </h3>
      </button>
    </div>
  );
};

export default PlayerPickingStage;
