import { ReactSVG } from 'react-svg';

import GameButton from '@/components/GameButton';
import games from '@/components/GameButton/games';

import * as Styled from './index.styled';

interface ChooseGameProps {
  onToggleIsMobileSetupCompleted: React.MouseEventHandler<HTMLDivElement>;
}

const ChooseGame = ({ onToggleIsMobileSetupCompleted }: ChooseGameProps) => {
  return (
    <Styled.ChooseGame className='choose-game'>
      <Styled.Header>
        <div className='arrow-btn' onClick={onToggleIsMobileSetupCompleted}>
          <ReactSVG src='images/svgs/arrow.left.svg' />
        </div>
        Pick a game
      </Styled.Header>
      <Styled.GameList>
        {games.map((game) => (
          <GameButton key={game.id} game={game} />
        ))}
      </Styled.GameList>
    </Styled.ChooseGame>
  );
};

export default ChooseGame;
