import { ReactSVG } from 'react-svg';

import * as Styled from './index.styled';

interface GameButtonProps {
  game: {
    id: number;
    name: string;
    icon: string;
  };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GameButton = ({ game, onClick }: GameButtonProps) => {
  return (
    <Styled.GameButtonWrapper>
      <Styled.GameButton onClick={onClick}>
        <ReactSVG src={game.icon} className='game-button-icon' />
      </Styled.GameButton>
      {game.name}
    </Styled.GameButtonWrapper>
  );
};

export default GameButton;
