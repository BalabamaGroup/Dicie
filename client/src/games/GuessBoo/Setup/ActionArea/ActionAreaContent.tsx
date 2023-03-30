import { UserInGame } from '@/common/types/user';

import SelectPlayer from './SelectPlayer';
import SetCharacter from './SetCharacter';
import WaitForAllReady from './WaitForAllReady';
import WaitForMyTurn from './WaitForMyTurn';

interface ActionAreaProps {
  isMyTurn: boolean;
  mePlayer: UserInGame;
  highlightedPlayer: UserInGame | null;
  setHighlightedPlayer: Function;
}

const ActionAreaContent = ({
  isMyTurn,
  mePlayer,
  highlightedPlayer,
  setHighlightedPlayer,
}: ActionAreaProps) => {
  if (!isMyTurn) return <WaitForMyTurn />;

  const isPlayerSelected = !!mePlayer.state.selectedUser;
  if (!isPlayerSelected)
    return <SelectPlayer highlightedPlayer={highlightedPlayer} />;

  const isReady = mePlayer.state.ready;
  const isCharacterSet = isPlayerSelected && highlightedPlayer?.state.word;
  if (highlightedPlayer && (!isReady || !isCharacterSet))
    return (
      <SetCharacter
        highlightedPlayer={highlightedPlayer}
        setHighlightedPlayer={setHighlightedPlayer}
      />
    );

  return <WaitForAllReady />;
};

export default ActionAreaContent;
