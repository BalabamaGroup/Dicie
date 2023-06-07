import { UserInGame } from '@/common/types/user';

import useGameStore from '@/stores/GameStore';

import ActionAreaContent from './ActionAreaContent';
import * as Styled from './index.styled';

interface ActionAreaProps {
  mePlayer: UserInGame;
  highlightedPlayer: UserInGame | null;
  setHighlightedPlayer: Function;
}

const ActionArea = ({
  mePlayer,
  highlightedPlayer,
  setHighlightedPlayer,
}: ActionAreaProps) => {
  const myTurn = useGameStore((s) => s.myTurn);

  return (
    <Styled.ActionArea isMyTurn={myTurn} isWait={!myTurn}>
      <ActionAreaContent
        isMyTurn={myTurn}
        mePlayer={mePlayer}
        highlightedPlayer={highlightedPlayer}
        setHighlightedPlayer={setHighlightedPlayer}
      />
    </Styled.ActionArea>
  );
};

export default ActionArea;
