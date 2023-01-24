import { UserInGame } from '@/common/types/user';

import * as Styled from './index.styled';

interface PlayerProps {
  player: UserInGame;
  isCurrentUserPlayer?: boolean;
  isCurrentUserTurn: boolean;
  isHighlighted?: boolean;
  setHighlightedUserId?: Function;
  disabledByLoopsPlayerId: number | null;
}

const Player = ({
  player,
  isCurrentUserTurn,
  isHighlighted = false,
  setHighlightedUserId = () => {},
  disabledByLoopsPlayerId,
}: PlayerProps) => {
  const isTaken = !!player.state.selectedBy;
  const isDisabledByLoop = disabledByLoopsPlayerId === player.id;
  const canBeHighlighted = isCurrentUserTurn && !isTaken && !isDisabledByLoop;

  const onSelectUser = () => {
    if (!canBeHighlighted) return;
    setHighlightedUserId(player.id);
  };

  return (
    <Styled.PlayerWrapper
      isCurrentUserTurn={isCurrentUserTurn}
      canBeHighlighted={canBeHighlighted}
      onClick={onSelectUser}
    >
      <Styled.Player isHighlighted={isHighlighted}>
        {player.state.word && (
          <Styled.PlayerCharacter>
            <div className='character' title={player.state.word}>
              {player.state.word}
            </div>
          </Styled.PlayerCharacter>
        )}
      </Styled.Player>
      <Styled.PlayerUsername>
        <div className='username' title={player.state.word}>
          {player.username}
        </div>
      </Styled.PlayerUsername>
    </Styled.PlayerWrapper>
  );
};

export default Player;
