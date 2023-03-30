import { UserInGame } from '@/common/types/user';
import { useColorStore } from '@/stores/ColorStore';

import ActionAreaContent from './ActionAreaContent';
import * as Styled from './index.styled';

interface ActionAreaProps {
  isMyTurn: boolean;
  mePlayer: UserInGame;
  highlightedPlayer: UserInGame | null;
  setHighlightedPlayer: Function;
}

const ActionArea = ({
  isMyTurn,
  mePlayer,
  highlightedPlayer,
  setHighlightedPlayer,
}: ActionAreaProps) => {
  const isWait = useColorStore((s) => s.color.guessBoo) === 'indigo';
  return (
    <Styled.ActionArea isMyTurn={isMyTurn} isWait={isWait}>
      <ActionAreaContent
        isMyTurn={isMyTurn}
        mePlayer={mePlayer}
        highlightedPlayer={highlightedPlayer}
        setHighlightedPlayer={setHighlightedPlayer}
      />
    </Styled.ActionArea>
  );
};

export default ActionArea;
