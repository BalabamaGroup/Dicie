import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import Button from '@/components/Button';
import GameButton from '@/components/GameButton';
import games from '@/components/GameButton/games';

import * as Styled from './index.styled';

interface ChooseGameProps {
  onCreateRoom: React.MouseEventHandler<HTMLButtonElement>;
  onToggleIsMobileSetupCompleted: React.MouseEventHandler<HTMLDivElement>;
}

const ChooseGame = ({
  onCreateRoom,
  onToggleIsMobileSetupCompleted,
}: ChooseGameProps) => {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const onSelectGame = (gameId: number) => {
    setSelectedGameId(gameId);
  };

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
          <GameButton
            key={game.id}
            game={game}
            isSelected={selectedGameId === game.id}
            onClick={() => onSelectGame(game.id)}
          />
        ))}
      </Styled.GameList>

      <Button
        className='create-room-button'
        isPrimary
        isScale
        onClick={onCreateRoom}
        size='large'
      >
        Create room
      </Button>
    </Styled.ChooseGame>
  );
};

export default ChooseGame;
