import { Game } from '@/common/types/room';
import { useUserStore } from '@/stores/UserStore';

import Main from './Main';
import Setup from './Setup';

interface GuessBooProps {
  gameData: Game;
}

const GuessBoo = ({ gameData }: GuessBooProps) => {
  const user = useUserStore((s) => s.user);
  const gameIsSetup = gameData.roomDataDto.allUsersReady;

  const meId = user?.id || -1;
  const [mePlayer] = gameData.users.filter((u) => u.id === meId);
  const otherPlayers = gameData.users.filter((u) => u.id !== meId);

  return !gameIsSetup ? (
    <Setup mePlayer={mePlayer} otherPlayers={otherPlayers} />
  ) : (
    <Main gameData={gameData} mePlayer={mePlayer} otherPlayers={otherPlayers} />
  );
};

export default GuessBoo;
