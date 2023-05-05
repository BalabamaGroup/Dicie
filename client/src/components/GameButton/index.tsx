import { ReactSVG } from 'react-svg';

import games from '@/common/constants/games';
import { ComponentColor } from '@/common/types/theme';

import * as Styled from './index.styled';

interface GameButtonProps {
  color: ComponentColor;
  gameId: number;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GameButton = ({
  color,
  gameId,
  isSelected = false,
  onClick,
}: GameButtonProps) => {
  let [game] = games.filter((g) => g.id === gameId);
  if (!game) return null;

  return (
    <Styled.GameButtonWrapper>
      <Styled.GameButtonHighlight color={color} isSelected={isSelected}>
        <Styled.GameButton onClick={onClick}>
          <ReactSVG src={game.icon} className='game-button-icon' />
        </Styled.GameButton>
      </Styled.GameButtonHighlight>
      {game.name}
    </Styled.GameButtonWrapper>
  );
};

export default GameButton;
