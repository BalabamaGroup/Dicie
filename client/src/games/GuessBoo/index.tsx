import { Game } from '@/common/types/room';

import Main from './Main';
import Setup from './Setup';

interface GuessBooProps {
  gameData: Game;
}

const GuessBoo = ({ gameData }: GuessBooProps) => {
  const gameIsSetup = gameData.roomDataDto.allUsersReady;

  const meId = +(sessionStorage.getItem('id') || -1);
  const [mePlayer] = gameData.users.filter((u) => u.id === meId);
  const otherPlayers = gameData.users.filter((u) => u.id !== meId);

  return !gameIsSetup ? (
    <Setup mePlayer={mePlayer} otherPlayers={otherPlayers} />
  ) : (
    <Main gameData={gameData} mePlayer={mePlayer} otherPlayers={otherPlayers} />
  );
};

export default GuessBoo;
