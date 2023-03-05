import { UserInGame } from '@/common/types/user';

import * as Styled from './index.styled';

interface PlayerProps {
  //   player: UserInGame;
  id?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';

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
  id,
  className,
  size = 'medium',

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
      id={id}
      className={className}
      onClick={onClick}
      isDisabled={isDisabled}
      isClickable={isClickable}
    >
      <Styled.Player
        size={size}
        canBeHighlighted={canBeHighlighted}
        isHighlighted={isHighlighted}
      >
        {label && (
          <Styled.PlayerLabel size={size}>
            <div className='character' title={label}>
              {label}
            </div>
          </Styled.PlayerLabel>
        )}
      </Styled.Player>
      {outsideLabel && (
        <Styled.PlayerOutsideLabel size={size}>
          <div className='username' title={outsideLabel}>
            {outsideLabel}
          </div>
        </Styled.PlayerOutsideLabel>
      )}
    </Styled.PlayerWrapper>
  );
};

export default Player;
