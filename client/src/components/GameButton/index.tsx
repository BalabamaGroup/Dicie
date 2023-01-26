import { ReactSVG } from 'react-svg';

import * as Styled from './index.styled';

interface GameButtonProps {
  game: {
    id: number;
    name: string;
    icon: string;
  };
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GameButton = ({ game, isSelected = false, onClick }: GameButtonProps) => {
  return (
    <Styled.GameButtonWrapper isSelected={isSelected}>
      <Styled.GameButton onClick={onClick}>
        <ReactSVG src={game.icon} className='game-button-icon' />
      </Styled.GameButton>
      {game.name}
    </Styled.GameButtonWrapper>
  );
};

export default GameButton;
