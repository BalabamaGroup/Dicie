import { ReactSVG } from 'react-svg';

import { ComponentColor } from '@/common/types/theme';

import * as Styled from './index.styled';

interface GameButtonProps {
  color: ComponentColor;
  game: {
    id: number;
    name: string;
    icon: string;
  };
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GameButton = ({
  color,
  game,
  isSelected = false,
  onClick,
}: GameButtonProps) => {
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
