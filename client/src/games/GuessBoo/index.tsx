import useGameStore from '@/stores/GameStore';

import Main from './Main';
import Setup from './Setup';

const GuessBoo = () => {
  const gameIsSetup = useGameStore((s) => s.specfic?.allUsersReady);
  return !gameIsSetup ? <Setup /> : <Main />;
};

export default GuessBoo;
