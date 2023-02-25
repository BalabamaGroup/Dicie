import { UserInGame } from '@/common/types/user';

import * as Styled from './index.styled';

interface PlayerProps {
  //   player: UserInGame;

  isClickable?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;

  label?: string | null;
  outsideLabel?: string | null;

  canBeHighlighted?: boolean;
  isHighlighted?: boolean;

  isDisabled?: boolean;
}

const Player = ({
  //   player,

  canBeHighlighted = false,
  isHighlighted = false,

  label,
  outsideLabel,

  isClickable = false,
  onClick,
  isDisabled = false,
}: PlayerProps) => {
  return (
    <Styled.PlayerWrapper
      onClick={onClick}
      isDisabled={isDisabled}
      isClickable={isClickable}
    >
      <Styled.Player
        canBeHighlighted={canBeHighlighted}
        isHighlighted={isHighlighted}
      >
        {label && (
          <Styled.PlayerCharacter>
            <div className='character' title={label}>
              {label}
            </div>
          </Styled.PlayerCharacter>
        )}
      </Styled.Player>
      {outsideLabel && (
        <Styled.PlayerUsername>
          <div className='username' title={outsideLabel}>
            {outsideLabel}
          </div>
        </Styled.PlayerUsername>
      )}
    </Styled.PlayerWrapper>
  );
};

export default Player;
